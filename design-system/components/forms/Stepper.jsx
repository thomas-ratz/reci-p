import React from "react";
import { IconButton } from "../core/IconButton.jsx";
export function Stepper({ value = 4, min = 1, max = 24, onChange, label = "Serves", unit }) {
  const set = n => onChange && onChange(Math.max(min, Math.min(max, n)));
  return <div style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: 4, background: "var(--surface-sunken)", borderRadius: "var(--radius-pill)", fontFamily: "var(--font-body)" }}>
    <IconButton icon="minus" label="Fewer" size="sm" variant="overlay" disabled={value <= min} onClick={() => set(value - 1)} />
    <span style={{ minWidth: 84, textAlign: "center", fontSize: 15, color: "var(--text-primary)" }}>
      {label && <span style={{ color: "var(--text-muted)" }}>{label} </span>}<strong style={{ fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>{value}</strong>{unit ? " " + unit : ""}
    </span>
    <IconButton icon="plus" label="More" size="sm" variant="overlay" disabled={value >= max} onClick={() => set(value + 1)} />
  </div>;
}
