import React from "react";
export function ImagePlaceholder({ label = "food photo", ratio = "4 / 3", radius = "var(--radius-md)", style, children }) {
  return <div style={{ position: "relative", aspectRatio: ratio, borderRadius: radius, overflow: "hidden", background: "repeating-linear-gradient(135deg, var(--beige-200) 0 10px, var(--beige-300) 10px 11px)", ...style }}>
    <span style={{ position: "absolute", left: 12, bottom: 10, font: "500 11px ui-monospace, Menlo, monospace", color: "var(--brown-700)" }}>{label}</span>
    {children}
  </div>;
}
