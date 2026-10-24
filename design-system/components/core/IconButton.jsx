import React, { useState } from "react";
import { Icon } from "./Icon.jsx";
export function IconButton({ icon, label, variant = "tint", size = "md", active, disabled, style, ...rest }) {
  const [h, setH] = useState(false);
  const d = { sm: 36, md: 44, lg: 52 }[size] || 44;
  const bg = { tint: ["var(--action-tint)", "var(--action-tint-hover)"], ghost: ["transparent", "var(--beige-200)"], solid: ["var(--action-primary)", "var(--action-primary-hover)"], overlay: ["oklch(0.985 0.008 80 / 0.9)", "var(--cream-50)"] }[variant] || [];
  const fg = variant === "solid" ? "var(--text-inverse)" : active ? "var(--orange-600)" : "var(--text-primary)";
  return (
    <button aria-label={label} title={label} aria-pressed={active} disabled={disabled} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} {...rest}
      style={{ width: d, height: d, display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "var(--radius-pill)", border: "none",
        background: h && !disabled ? bg[1] : bg[0], color: fg, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.45 : 1,
        boxShadow: variant === "overlay" ? "var(--shadow-sm)" : "none", transition: "background var(--dur-fast) var(--ease-out)", padding: 0, ...style }}>
      <Icon name={icon} size={Math.round(d * 0.45)} />
    </button>
  );
}
