import React, { useState, useEffect } from "react";
const CDN = "https://unpkg.com/lucide-static@0.460.0/icons/";
const CACHE = (window.__lucideCache = window.__lucideCache || {});
function load(name) {
  if (!CACHE[name]) CACHE[name] = fetch(CDN + name + ".svg").then(r => (r.ok ? r.text() : "")).catch(() => "");
  return CACHE[name];
}
export function Icon({ name, size = 20, color = "currentColor", strokeWidth = 2, filled, style, ...rest }) {
  const [svg, setSvg] = useState("");
  useEffect(() => { let on = true; load(name).then(t => on && setSvg(t)); return () => { on = false; }; }, [name]);
  const html = svg.replace(/width="\d+"/, `width="${size}"`).replace(/height="\d+"/, `height="${size}"`).replace(/stroke-width="[\d.]+"/, `stroke-width="${strokeWidth}"`).replace(/fill="none"/, filled ? 'fill="currentColor"' : 'fill="none"');
  return <span aria-hidden="true" {...rest} style={{ display: "inline-flex", flex: "none", width: size, height: size, color, lineHeight: 0, ...style }} dangerouslySetInnerHTML={{ __html: html }} />;
}
