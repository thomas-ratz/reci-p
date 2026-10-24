import React from "react";
import { Icon } from "../core/Icon.jsx";
export function Toast({ icon = "check", children, action, onAction, style }) {
  return <div role="status" style={{ display: "inline-flex", alignItems: "center", gap: 12, minHeight: 48, padding: "0 8px 0 18px", borderRadius: "var(--radius-pill)", background: "var(--surface-inverse)", color: "var(--cream-50)", boxShadow: "var(--shadow-lg)", font: "500 15px var(--font-body)", ...style }}>
    {icon && <Icon name={icon} size={18} color="var(--orange-200)" />}
    <span style={{ paddingRight: action ? 0 : 10 }}>{children}</span>
    {action && <button onClick={onAction} style={{ height: 34, padding: "0 14px", borderRadius: 999, border: "none", background: "oklch(0.985 0.008 80 / 0.12)", color: "var(--orange-200)", font: "600 14px var(--font-body)", cursor: "pointer" }}>{action}</button>}
  </div>;
}
