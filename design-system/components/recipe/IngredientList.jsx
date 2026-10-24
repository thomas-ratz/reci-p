import React, { useState } from "react";
import { Checkbox } from "../forms/Checkbox.jsx";
const fmt = n => { const w = Math.floor(n), r = n - w; const fr = [[0.25,"¼"],[0.33,"⅓"],[0.5,"½"],[0.67,"⅔"],[0.75,"¾"]].find(([v]) => Math.abs(v - r) < 0.04); if (r < 0.04) return String(w); if (fr) return (w || "") + fr[1]; return n.toFixed(1).replace(/\.0$/, ""); };
export function IngredientList({ groups = [], scale = 1, checkable = true }) {
  const [done, setDone] = useState({});
  return <div style={{ display: "flex", flexDirection: "column", gap: 24, fontFamily: "var(--font-body)" }}>
    {groups.map((g, gi) => <section key={gi} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      {g.title && <h4 style={{ margin: "0 0 6px", font: "700 12px var(--font-body)", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>{g.title}</h4>}
      {g.items.map((it, i) => { const k = gi + "-" + i; const q = it.qty != null ? fmt(it.qty * scale) : "";
        const label = <span style={{ display: "inline-flex", gap: 10 }}><strong style={{ fontWeight: 700, minWidth: 64, fontVariantNumeric: "tabular-nums" }}>{q} {it.unit || ""}</strong><span>{it.name}{it.note && <span style={{ color: "var(--text-muted)" }}>, {it.note}</span>}</span></span>;
        return <div key={k} style={{ padding: "10px 0", borderBottom: "1px solid var(--border-subtle)" }}>
          {checkable ? <Checkbox strike checked={!!done[k]} onChange={v => setDone(d => ({ ...d, [k]: v }))} label={label} /> : <span style={{ font: "400 16px var(--font-body)", color: "var(--text-primary)" }}>{label}</span>}
        </div>; })}
    </section>)}
  </div>;
}
