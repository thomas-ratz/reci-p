import React from "react";
export function Switch({ checked, onChange, label, disabled, style }) {
  return <label style={{ display: "inline-flex", alignItems: "center", gap: 12, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1, font: "400 16px var(--font-body)", color: "var(--text-primary)", ...style }}>
    <button type="button" role="switch" aria-checked={!!checked} disabled={disabled} onClick={() => onChange && onChange(!checked)}
      style={{ width: 44, height: 26, flex: "none", borderRadius: 999, border: "none", padding: 3, background: checked ? "var(--action-primary)" : "var(--beige-300)", cursor: "inherit", transition: "background var(--dur-base) var(--ease-out)" }}>
      <span style={{ display: "block", width: 20, height: 20, borderRadius: "50%", background: "var(--cream-50)", boxShadow: "var(--shadow-xs)", transform: checked ? "translateX(18px)" : "none", transition: "transform var(--dur-base) var(--ease-out)" }} />
    </button>
    {label && <span>{label}</span>}
  </label>;
}
