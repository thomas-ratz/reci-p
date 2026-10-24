import React from "react";
import { Icon } from "../core/Icon.jsx";
export function RecipeMeta({ items = [], size = "md", divider = true }) {
  const fs = size === "sm" ? 13 : 15;
  return <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", columnGap: size === "sm" ? 12 : 20, rowGap: 10, minWidth: 0, font: `500 ${fs}px var(--font-body)`, color: "var(--text-secondary)" }}>
    {items.map((it, i) => <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 6, paddingLeft: divider && i ? (size === "sm" ? 12 : 20) : 0, borderLeft: divider && i ? "1px solid var(--border-subtle)" : "none" }}>
      {it.icon && <Icon name={it.icon} size={fs + 2} color="var(--brown-600)" />}
      {it.label && <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>{it.label}</span>}
      <span style={{ fontVariantNumeric: "tabular-nums" }}>{it.value}</span>
    </span>)}
  </div>;
}
