import React, { useState } from "react";
import { Icon } from "./Icon.jsx";
const SIZES = { sm: { h: "var(--control-h-sm)", px: 14, fs: 14, ic: 16 }, md: { h: "var(--control-h-md)", px: 20, fs: 15, ic: 18 }, lg: { h: "var(--control-h-lg)", px: 26, fs: 16, ic: 20 } };
const VARIANTS = {
  primary: { bg: "var(--action-primary)", bgH: "var(--action-primary-hover)", fg: "var(--text-inverse)", bd: "transparent" },
  secondary: { bg: "var(--action-secondary)", bgH: "var(--action-secondary-hover)", fg: "var(--text-inverse)", bd: "transparent" },
  tint: { bg: "var(--action-tint)", bgH: "var(--action-tint-hover)", fg: "var(--text-primary)", bd: "transparent" },
  outline: { bg: "transparent", bgH: "var(--beige-200)", fg: "var(--text-primary)", bd: "var(--border-default)" },
  ghost: { bg: "transparent", bgH: "var(--beige-200)", fg: "var(--text-primary)", bd: "transparent" },
};
export function Button({ variant = "primary", size = "md", iconLeft, iconRight, fullWidth, disabled, children, style, ...rest }) {
  const [h, setH] = useState(false); const [p, setP] = useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary, s = SIZES[size] || SIZES.md;
  return (
    <button disabled={disabled} onMouseEnter={() => setH(true)} onMouseLeave={() => { setH(false); setP(false); }} onMouseDown={() => setP(true)} onMouseUp={() => setP(false)} {...rest}
      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, height: s.h, padding: `0 ${s.px}px`, width: fullWidth ? "100%" : undefined,
        fontFamily: "var(--font-body)", fontSize: s.fs, fontWeight: 600, letterSpacing: "0.005em", whiteSpace: "nowrap",
        background: h && !disabled ? v.bgH : v.bg, color: v.fg, border: `1.5px solid ${v.bd}`, borderRadius: "var(--radius-pill)",
        cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.45 : 1, transform: p && !disabled ? "scale(0.97)" : "none",
        transition: "background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)", outline: "none", ...style }}>
      {iconLeft && <Icon name={iconLeft} size={s.ic} />}{children}{iconRight && <Icon name={iconRight} size={s.ic} />}
    </button>
  );
}
