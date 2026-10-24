import React from "react";
import { Icon } from "../core/Icon.jsx";
const T = { neutral: ["var(--beige-200)", "var(--brown-800)"], accent: ["var(--orange-100)", "var(--orange-700)"], success: ["var(--status-success-bg)", "var(--status-success)"], warning: ["var(--status-warning-bg)", "oklch(0.45 0.09 70)"], danger: ["var(--status-danger-bg)", "var(--status-danger)"], inverse: ["var(--brown-900)", "var(--orange-200)"] };
export function Badge({ tone = "neutral", icon, children, style }) {
  const [bg, fg] = T[tone] || T.neutral;
  return <span style={{ display: "inline-flex", alignItems: "center", gap: 5, height: 24, padding: "0 10px", borderRadius: "var(--radius-pill)", background: bg, color: fg, font: "700 11px var(--font-body)", letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap", ...style }}>
    {icon && <Icon name={icon} size={13} />}{children}
  </span>;
}
