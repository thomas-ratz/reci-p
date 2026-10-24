import React from "react";
import { IconButton } from "../core/IconButton.jsx";
export function Dialog({ open, title, children, actions, onClose, width = 480 }) {
  if (!open) return null;
  return <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "var(--overlay)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, zIndex: 100 }}>
    <div role="dialog" aria-modal="true" onClick={e => e.stopPropagation()} style={{ width: "100%", maxWidth: width, background: "var(--surface-raised)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-lg)", padding: 28, display: "flex", flexDirection: "column", gap: 16, fontFamily: "var(--font-body)" }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16 }}>
        <h2 style={{ margin: 0, font: "400 26px/1.2 var(--font-display)", color: "var(--text-primary)" }}>{title}</h2>
        {onClose && <IconButton icon="x" label="Close" variant="ghost" size="sm" onClick={onClose} style={{ margin: "-6px -8px 0 0" }} />}
      </div>
      <div style={{ font: "400 16px/1.6 var(--font-body)", color: "var(--text-secondary)" }}>{children}</div>
      {actions && <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 8 }}>{actions}</div>}
    </div>
  </div>;
}
