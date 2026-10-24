import React from "react";
import { Icon } from "../core/Icon.jsx";
export function Checkbox({ checked, onChange, label, strike, disabled, style }) {
  return <label style={{ display: "inline-flex", alignItems: "center", gap: 12, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1, font: "400 16px/1.4 var(--font-body)", color: "var(--text-primary)", ...style }}>
    <input type="checkbox" checked={!!checked} disabled={disabled} onChange={e => onChange && onChange(e.target.checked)} style={{ position: "absolute", opacity: 0, width: 0, height: 0 }} />
    <span style={{ width: 22, height: 22, flex: "none", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", border: `1.5px solid ${checked ? "var(--action-primary)" : "var(--border-default)"}`, background: checked ? "var(--action-primary)" : "var(--surface-raised)", color: "var(--text-inverse)", transition: "background var(--dur-fast)" }}>
      {checked && <Icon name="check" size={15} />}
    </span>
    {label && <span style={{ textDecoration: strike && checked ? "line-through" : "none", color: strike && checked ? "var(--text-muted)" : undefined }}>{label}</span>}
  </label>;
}
