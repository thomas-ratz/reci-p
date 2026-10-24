import React, { useState } from "react";
import { Icon } from "../core/Icon.jsx";
function Field({ label, hint, error, children }) {
  return <label style={{ display: "flex", flexDirection: "column", gap: 6, fontFamily: "var(--font-body)" }}>
    {label && <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>{label}</span>}
    {children}
    {(error || hint) && <span style={{ fontSize: 13, color: error ? "var(--status-danger)" : "var(--text-muted)" }}>{error || hint}</span>}
  </label>;
}
export function Input({ label, hint, error, icon, size = "md", disabled, style, ...rest }) {
  const [f, setF] = useState(false);
  const h = size === "lg" ? 52 : size === "sm" ? 36 : 44;
  return <Field label={label} hint={hint} error={error}>
    <span style={{ display: "flex", alignItems: "center", gap: 10, height: h, padding: "0 16px", background: disabled ? "var(--beige-200)" : "var(--surface-raised)", borderRadius: "var(--radius-sm)",
      border: `1.5px solid ${error ? "var(--status-danger)" : f ? "var(--border-focus)" : "var(--border-default)"}`, boxShadow: f ? "var(--focus-ring)" : "none", transition: "box-shadow var(--dur-fast), border-color var(--dur-fast)", color: "var(--text-muted)" }}>
      {icon && <Icon name={icon} size={18} />}
      <input disabled={disabled} onFocus={() => setF(true)} onBlur={() => setF(false)} {...rest}
        style={{ flex: 1, minWidth: 0, border: "none", outline: "none", background: "transparent", font: "400 16px var(--font-body)", color: "var(--text-primary)", ...style }} />
    </span>
  </Field>;
}
