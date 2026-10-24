import React, { useState } from "react";
export function Tooltip({ content, children, placement = "top" }) {
  const [o, setO] = useState(false);
  const top = placement === "top";
  return <span style={{ position: "relative", display: "inline-flex" }} onMouseEnter={() => setO(true)} onMouseLeave={() => setO(false)} onFocus={() => setO(true)} onBlur={() => setO(false)}>
    {children}
    {o && <span role="tooltip" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", [top ? "bottom" : "top"]: "calc(100% + 8px)", padding: "6px 10px", borderRadius: "var(--radius-sm)", background: "var(--surface-inverse)", color: "var(--cream-50)", font: "500 13px/1.3 var(--font-body)", whiteSpace: "nowrap", boxShadow: "var(--shadow-md)", pointerEvents: "none", zIndex: 50 }}>{content}</span>}
  </span>;
}
