import React from "react";
import { Icon } from "../core/Icon.jsx";
export function MethodStep({ number, title, children, timer, done, onToggle }) {
  return <div onClick={onToggle} style={{ display: "grid", gridTemplateColumns: "48px minmax(0,1fr)", gap: 16, padding: "20px 0", borderBottom: "1px solid var(--border-subtle)", cursor: onToggle ? "pointer" : "default", opacity: done ? 0.55 : 1, transition: "opacity var(--dur-base)" }}>
    <span style={{ width: 40, height: 40, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", font: "400 20px var(--font-display)", background: done ? "var(--herb-600)" : "var(--orange-100)", color: done ? "var(--cream-50)" : "var(--orange-700)" }}>
      {done ? <Icon name="check" size={20} /> : number}
    </span>
    <div style={{ display: "flex", flexDirection: "column", gap: 8, fontFamily: "var(--font-body)" }}>
      {title && <h4 style={{ margin: 0, font: "600 18px/1.3 var(--font-body)", color: "var(--text-primary)" }}>{title}</h4>}
      <div style={{ font: "400 17px/1.65 var(--font-body)", color: "var(--text-secondary)", maxWidth: "var(--measure)", textWrap: "pretty" }}>{children}</div>
      {timer && <span style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 6, height: 30, padding: "0 12px", borderRadius: 999, background: "var(--surface-sunken)", font: "600 13px var(--font-body)", color: "var(--text-primary)" }}><Icon name="timer" size={15} />{timer}</span>}
    </div>
  </div>;
}
