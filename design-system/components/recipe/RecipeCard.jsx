import React, { useState } from "react";
import { IconButton } from "../core/IconButton.jsx";
import { Badge } from "../display/Badge.jsx";
import { RecipeMeta } from "../display/RecipeMeta.jsx";
import { Rating } from "../display/Rating.jsx";
import { ImagePlaceholder } from "./ImagePlaceholder.jsx";
export function RecipeCard({ title, category, time, serves, rating, ratingCount, badge, image, saved, onSave, onClick, layout = "vertical" }) {
  const [h, setH] = useState(false);
  const horiz = layout === "horizontal";
  const img = image ? <img src={image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /> : null;
  return <article onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
    style={{ display: "flex", flexDirection: horiz ? "row" : "column", gap: horiz ? 16 : 14, cursor: onClick ? "pointer" : "default", fontFamily: "var(--font-body)", minWidth: 0 }}>
    <div style={{ position: "relative", flex: horiz ? "0 0 140px" : "none", borderRadius: "var(--radius-md)", overflow: "hidden", transform: h ? "translateY(-2px)" : "none", boxShadow: h ? "var(--shadow-md)" : "var(--shadow-xs)", transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)" }}>
      <ImagePlaceholder label={image ? "" : "dish photo"} ratio={horiz ? "1 / 1" : "4 / 3"} radius="0">{img && <div style={{ position: "absolute", inset: 0 }}>{img}</div>}</ImagePlaceholder>
      {badge && !horiz && <Badge tone="inverse" style={{ position: "absolute", top: 12, left: 12 }}>{badge}</Badge>}
      {onSave && !horiz && <IconButton icon="heart" label={saved ? "Saved" : "Save"} variant="overlay" size="sm" active={saved} onClick={e => { e.stopPropagation(); onSave(); }} style={{ position: "absolute", top: 10, right: 10 }} />}
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 6, minWidth: 0, justifyContent: horiz ? "center" : "flex-start" }}>
      {category && <span style={{ font: "700 11px var(--font-body)", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-accent)" }}>{category}</span>}
      <h3 style={{ margin: 0, font: `400 ${horiz ? 20 : 22}px/1.25 var(--font-display)`, color: "var(--text-primary)", textDecoration: h && onClick ? "underline" : "none", textDecorationThickness: 1, textUnderlineOffset: 4, textWrap: "pretty" }}>{title}</h3>
      <RecipeMeta size="sm" items={[time && { icon: "clock", value: time }, serves && { icon: "users", value: serves }].filter(Boolean)} />
      {rating != null && <Rating value={rating} count={ratingCount} size={14} />}
    </div>
  </article>;
}
