import React, { useState } from "react";
import { Icon } from "../core/Icon.jsx";
export function Tag({ selected, icon, onClick, onRemove, children, style }) {
  const [h, setH] = useState(false);
  return <button type="button" onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
    style={{ display: "inline-flex", alignItems: "center", gap: 6, height: 36, padding: "0 14px", borderRadius: "var(--radius-pill)", cursor: "pointer",
      font: "500 14px var(--font-body)", whiteSpace: "nowrap", transition: "background var(--dur-fast)",
      background: selected ? "var(--brown-900)" : h ? "var(--beige-200)" : "var(--surface-raised)", color: selected ? "var(--cream-50)" : "var(--text-primary)",
      border: `1.5px solid ${selected ? "var(--brown-900)" : "var(--border-subtle)"}`, ...style }}>
    {icon && <Icon name={icon} size={16} />}{children}
    {onRemove && <span onClick={e => { e.stopPropagation(); onRemove(); }} style={{ display: "inline-flex", marginRight: -4 }}><Icon name="x" size={14} /></span>}
  </button>;
}
