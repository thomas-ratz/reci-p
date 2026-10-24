import React, { useState } from "react";
import { Icon } from "../core/Icon.jsx";
export function Rating({ value = 0, count, size = 16, onRate }) {
  const [hv, setHv] = useState(0);
  const shown = hv || value;
  return <span style={{ display: "inline-flex", alignItems: "center", gap: 6, font: "500 14px var(--font-body)", color: "var(--text-muted)" }}>
    <span style={{ display: "inline-flex", gap: 1 }} onMouseLeave={() => setHv(0)}>
      {[1, 2, 3, 4, 5].map(i => <span key={i} onMouseEnter={() => onRate && setHv(i)} onClick={() => onRate && onRate(i)} style={{ cursor: onRate ? "pointer" : "default", display: "inline-flex" }}>
        <Icon name="star" filled size={size} color={i <= Math.round(shown) ? "var(--orange-500)" : "var(--beige-300)"} />
      </span>)}
    </span>
    {count != null && <span><strong style={{ color: "var(--text-primary)", fontWeight: 700 }}>{value.toFixed(1)}</strong> ({count})</span>}
  </span>;
}
