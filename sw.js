---
layout: null
---
// Offline support. Jekyll fills in the page list on every build, and the build time in the cache
// name makes each deploy a new service worker that replaces the old cache.
const CACHE = 'reci-p-{{ site.time | date: "%s" }}';
const PRECACHE = [
  '{{ "/" | relative_url }}',
  {%- for r in site.recipes %}
  '{{ r.url | relative_url }}',
  {%- endfor %}
  {%- for f in site.static_files %}{% if f.path contains '/design-system/' or f.path contains '/assets/' %}
  '{{ f.path | relative_url }}',
  {%- endif %}{% endfor %}
  '{{ "/manifest.webmanifest" | relative_url }}'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

const save = (req, res) => {
  if (res.ok || res.type === 'opaque') { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
  return res;
};

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  // Pages: network first so edits show up straight away; the cached copy when offline.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(res => save(req, res))
        .catch(() => caches.match(req, { ignoreSearch: true }).then(hit => hit || caches.match('{{ "/" | relative_url }}')))
    );
    return;
  }
  // CSS, fonts (incl. Google Fonts), icons: cache first, filled in as they're used.
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => save(req, res))));
});
