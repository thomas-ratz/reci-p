const { Input: SIn, Tag: STag, Select: SSel, Checkbox: SCb, RecipeCard: SCard } = window.DS;
function Search({ onOpen, saved, toggleSave }) {
  const [q, setQ] = React.useState(""), [cats, setCats] = React.useState({}), [quick, setQuick] = React.useState(false), [veg, setVeg] = React.useState(false);
  const list = window.RECIPES.filter(r => (!q || r.title.toLowerCase().includes(q.toLowerCase())) && (!Object.values(cats).some(Boolean) || cats[r.category]) && (!quick || /min/.test(r.time)));
  const active = Object.keys(cats).filter(k => cats[k]);
  return <main style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "40px var(--container-pad) 0", display: "flex", flexDirection: "column", gap: 28 }}>
    <h1 style={{ margin: 0, font: "400 48px/1.08 var(--font-display)" }}>All recipes</h1>
    <SIn icon="search" size="lg" placeholder="Search recipes or ingredients" value={q} onChange={e => setQ(e.target.value)} />
    <div style={{ display: "grid", gridTemplateColumns: "240px minmax(0,1fr)", gap: 48, alignItems: "start" }}>
      <aside style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <span style={{ font: "700 12px var(--font-body)", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>Course</span>
          {["Weeknight", "Mains", "Baking", "Soups", "Sides", "Breakfast"].map(c => <SCb key={c} label={c} checked={!!cats[c]} onChange={v => setCats(x => ({ ...x, [c]: v }))} />)}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <span style={{ font: "700 12px var(--font-body)", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>Good to know</span>
          <SCb label="Under an hour" checked={quick} onChange={setQuick} /><SCb label="Vegetarian" checked={veg} onChange={setVeg} />
        </div>
      </aside>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ color: "var(--text-muted)" }}>{list.length} recipes</span>
            {active.map(a => <STag key={a} onRemove={() => setCats(x => ({ ...x, [a]: false }))}>{a}</STag>)}
          </div>
          <div style={{ width: 200 }}><SSel options={["Most loved", "Quickest", "Newest"]} /></div>
        </div>
        {list.length ? <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: "40px 24px" }}>
          {list.map(r => <SCard key={r.id} {...r} saved={!!saved[r.id]} onSave={() => toggleSave(r.id)} onClick={() => onOpen(r.id)} />)}
        </div> : <div style={{ padding: 48, textAlign: "center", background: "var(--surface-sunken)", borderRadius: "var(--radius-lg)" }}>
          <h3 style={{ margin: "0 0 8px", font: "400 24px var(--font-display)" }}>Nothing yet</h3>
          <p style={{ margin: 0, color: "var(--text-secondary)" }}>Try fewer filters, or search for a single ingredient.</p></div>}
      </div>
    </div>
  </main>;
}
window.Search = Search;
