import React from "react";
export function Radio({ checked, onChange, label, name, value, disabled, style }) {
  return <label style={{ display: "inline-flex", alignItems: "center", gap: 12, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1, font: "400 16px/1.4 var(--font-body)", color: "var(--text-primary)", ...style }}>
    <input type="radio" name={name} value={value} checked={!!checked} disabled={disabled} onChange={() => onChange && onChange(value)} style={{ position: "absolute", opacity: 0, width: 0, height: 0 }} />
    <span style={{ width: 22, height: 22, flex: "none", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", border: `1.5px solid ${checked ? "var(--action-primary)" : "var(--border-default)"}`, background: "var(--surface-raised)" }}>
      {checked && <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--action-primary)" }} />}
    </span>
    {label && <span>{label}</span>}
  </label>;
}
