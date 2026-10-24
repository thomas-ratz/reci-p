const { Button: RB, IconButton: RIB, Badge: RBadge, Rating: RRating, RecipeMeta: RMeta, Stepper: RStep, IngredientList: RIng, MethodStep: RMS, Tabs: RTabs, ImagePlaceholder: RImg, Switch: RSw, Tooltip: RTip } = window.DS;
function RecipePage({ id, saved, toggleSave, onBack }) {
  const r = window.RECIPES.find(x => x.id === id) || window.RECIPES[0];
  const d = window.RAGU;
  const [serves, setServes] = React.useState(6), [units, setUnits] = React.useState("Metric"), [done, setDone] = React.useState({}), [cook, setCook] = React.useState(false);
  return <main style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "24px var(--container-pad) 0" }}>
    <a href="#" onClick={e => { e.preventDefault(); onBack(); }} style={{ font: "500 14px var(--font-body)", color: "var(--text-muted)", textDecoration: "none" }}>← {r.category}</a>
    <header style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "end", padding: "20px 0 32px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "flex", gap: 8 }}>{r.badge && <RBadge tone="accent">{r.badge}</RBadge>}<RBadge>{r.category}</RBadge></div>
        <h1 style={{ margin: 0, font: "400 56px/1.06 var(--font-display)", letterSpacing: "-0.01em", textWrap: "balance" }}>{r.title}</h1>
        <RRating value={r.rating} count={r.ratingCount} />
      </div>
      <p style={{ margin: 0, font: "400 18px/1.6 var(--font-body)", color: "var(--text-secondary)" }}>{d.intro}</p>
    </header>
    <RImg label="hero · finished dish on the table, warm side light" ratio="21 / 9" radius="var(--radius-xl)" />
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, padding: "24px 0", borderBottom: "1px solid var(--border-subtle)", flexWrap: "wrap" }}>
      <div style={{ flex: "1 1 auto", minWidth: 0 }}><RMeta divider={false} items={[{ icon: "clock", label: "Prep", value: "20 min" }, { icon: "flame", label: "Cook", value: r.time }, { icon: "users", value: r.serves }, { icon: "gauge", value: "Easy" }]} /></div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
        <RTip content="Keeps your screen awake"><RSw label="Cook mode" checked={cook} onChange={setCook} /></RTip>
        <RIB icon="printer" label="Print" variant="ghost" /><RIB icon="share-2" label="Share" variant="ghost" />
        <RB variant={saved[r.id] ? "tint" : "primary"} iconLeft="heart" onClick={() => toggleSave(r.id)}>{saved[r.id] ? "Saved" : "Save recipe"}</RB>
      </div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 380px) minmax(0, 1fr)", gap: 64, paddingTop: 40, alignItems: "start" }}>
      <aside style={{ position: "sticky", top: 96, display: "flex", flexDirection: "column", gap: 20, background: "var(--surface-raised)", borderRadius: "var(--radius-lg)", padding: 28, boxShadow: "var(--shadow-sm)" }}>
        <h2 style={{ margin: 0, font: "400 28px var(--font-display)" }}>Ingredients</h2>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}><RStep value={serves} onChange={setServes} /><RTabs variant="pill" items={["Metric", "US"]} value={units} onChange={setUnits} /></div>
        <RIng groups={d.groups} scale={serves / 6} />
      </aside>
      <section>
        <h2 style={{ margin: "0 0 8px", font: "400 28px var(--font-display)" }}>Method</h2>
        {d.steps.map(([t, b, tm], i) => <RMS key={i} number={i + 1} title={t} timer={tm} done={done[i]} onToggle={() => setDone(x => ({ ...x, [i]: !x[i] }))}>{b}</RMS>)}
        <div style={{ marginTop: 32, padding: 28, background: "var(--surface-sunken)", borderRadius: "var(--radius-lg)", display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={{ font: "700 12px var(--font-body)", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-accent)" }}>Cook’s note</span>
          <p style={{ margin: 0, color: "var(--text-secondary)" }}>It’s even better the next day. Make it ahead, cool, and keep in the fridge for up to three days — or freeze in portions.</p>
        </div>
      </section>
    </div>
  </main>;
}
window.RecipePage = RecipePage;
