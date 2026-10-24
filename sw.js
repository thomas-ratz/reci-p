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
  // cache: 'reload' skips the browser's HTTP cache, so a fresh deploy never stores stale files.
  e.waitUntil(caches.open(CACHE)
    .then(c => c.addAll(PRECACHE.map(url => new Request(url, { cache: 'reload' }))))
    .then(() => self.skipWaiting()));
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
  // Our own pages, CSS and icons: network first so edits show up straight away; the stored copy when offline.
  if (new URL(req.url).origin === location.origin) {
    e.respondWith(
      fetch(req, { cache: 'no-cache' }).then(res => save(req, res))
        .catch(() => caches.match(req, { ignoreSearch: true })
          .then(hit => hit || (req.mode === 'navigate' ? caches.match('{{ "/" | relative_url }}') : Response.error())))
    );
    return;
  }
  // Google Fonts never change at a given URL: stored copy first, filled in as they're used.
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => save(req, res))));
});
