import React from "react";
export function Tabs({ items = [], value, onChange, variant = "underline" }) {
  const pill = variant === "pill";
  return <div role="tablist" style={{ display: "flex", gap: pill ? 4 : 28, padding: pill ? 4 : 0, background: pill ? "var(--surface-sunken)" : "transparent", borderRadius: pill ? 999 : 0, borderBottom: pill ? "none" : "1px solid var(--border-subtle)", width: pill ? "fit-content" : "auto" }}>
    {items.map(it => { const id = it.value ?? it; const on = id === value;
      return <button key={id} role="tab" aria-selected={on} onClick={() => onChange && onChange(id)}
        style={{ border: "none", cursor: "pointer", font: `${on ? 600 : 500} 15px var(--font-body)`, whiteSpace: "nowrap", transition: "all var(--dur-fast)",
          ...(pill ? { height: 36, padding: "0 16px", borderRadius: 999, background: on ? "var(--surface-raised)" : "transparent", boxShadow: on ? "var(--shadow-xs)" : "none", color: on ? "var(--text-primary)" : "var(--text-muted)" }
                   : { height: 44, padding: 0, background: "transparent", marginBottom: -1, borderBottom: `2px solid ${on ? "var(--action-primary)" : "transparent"}`, color: on ? "var(--text-primary)" : "var(--text-muted)" }) }}>
        {it.label ?? it}{it.count != null && <span style={{ marginLeft: 6, color: "var(--text-muted)", fontWeight: 400 }}>{it.count}</span>}
      </button>; })}
  </div>;
}
