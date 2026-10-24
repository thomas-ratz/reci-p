import React, { useState } from "react";
import { Icon } from "../core/Icon.jsx";
function Field({ label, hint, error, children }) {
  return <label style={{ display: "flex", flexDirection: "column", gap: 6, fontFamily: "var(--font-body)" }}>
    {label && <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>{label}</span>}
    {children}
    {(error || hint) && <span style={{ fontSize: 13, color: error ? "var(--status-danger)" : "var(--text-muted)" }}>{error || hint}</span>}
  </label>;
}
export function Select({ label, hint, error, options = [], disabled, style, ...rest }) {
  const [f, setF] = useState(false);
  return <Field label={label} hint={hint} error={error}>
    <span style={{ position: "relative", display: "flex", alignItems: "center" }}>
      <select disabled={disabled} onFocus={() => setF(true)} onBlur={() => setF(false)} {...rest}
        style={{ appearance: "none", width: "100%", height: 44, padding: "0 40px 0 16px", font: "400 16px var(--font-body)", color: "var(--text-primary)", background: disabled ? "var(--beige-200)" : "var(--surface-raised)",
          border: `1.5px solid ${error ? "var(--status-danger)" : f ? "var(--border-focus)" : "var(--border-default)"}`, borderRadius: "var(--radius-sm)", boxShadow: f ? "var(--focus-ring)" : "none", outline: "none", cursor: "pointer", ...style }}>
        {options.map(o => typeof o === "string" ? <option key={o}>{o}</option> : <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      <Icon name="chevron-down" size={18} style={{ position: "absolute", right: 14, pointerEvents: "none", color: "var(--text-muted)" }} />
    </span>
  </Field>;
}
