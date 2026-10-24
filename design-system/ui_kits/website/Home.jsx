const { Button: HB, Tag: HTag, RecipeCard: HCard, ImagePlaceholder: HImg, Input: HIn } = window.DS;
function Home({ onOpen, saved, toggleSave }) {
  const [cat, setCat] = React.useState("All");
  const cats = ["All", "Weeknight", "Baking", "Mains", "Soups", "Breakfast", "Sides"];
  const list = window.RECIPES.filter(r => cat === "All" || r.category === cat);
  return <main>
    <section style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "48px var(--container-pad) 0", display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 48, alignItems: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <span style={{ font: "700 12px var(--font-body)", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-accent)" }}>This week’s recipe</span>
        <h1 style={{ margin: 0, font: "400 64px/1.04 var(--font-display)", letterSpacing: "-0.01em", textWrap: "balance" }}>Slow Sunday ragù</h1>
        <p style={{ margin: 0, font: "400 18px/1.6 var(--font-body)", color: "var(--text-secondary)", maxWidth: 460 }}>{window.RAGU.intro}</p>
        <div style={{ display: "flex", gap: 12 }}><HB size="lg" iconLeft="chef-hat" onClick={() => onOpen("ragu")}>Start cooking</HB><HB size="lg" variant="outline" iconLeft="bookmark" onClick={() => toggleSave("ragu")}>{saved.ragu ? "Saved" : "Save"}</HB></div>
      </div>
      <HImg label="hero · ragù in a cast-iron pot, overhead, daylight" ratio="5 / 4" radius="var(--radius-xl)" />
    </section>
    <section style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "80px var(--container-pad) 0", display: "flex", flexDirection: "column", gap: 28 }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24 }}>
        <h2 style={{ margin: 0, font: "400 40px/1.12 var(--font-display)" }}>Cook something good tonight</h2>
        <a href="#" style={{ font: "600 15px var(--font-body)" }}>See all recipes</a>
      </div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>{cats.map(c => <HTag key={c} selected={cat === c} onClick={() => setCat(c)}>{c}</HTag>)}</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: "40px 24px" }}>
        {list.map(r => <HCard key={r.id} {...r} saved={!!saved[r.id]} onSave={() => toggleSave(r.id)} onClick={() => onOpen(r.id)} />)}
      </div>
    </section>
    <section style={{ maxWidth: "var(--container-max)", margin: "80px auto 0", padding: "0 var(--container-pad)" }}>
      <div style={{ background: "var(--surface-accent)", borderRadius: "var(--radius-xl)", padding: 48, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <h2 style={{ margin: 0, font: "400 32px/1.16 var(--font-display)" }}>What’s in your fridge?</h2>
          <p style={{ margin: 0, color: "var(--text-secondary)" }}>Tell us two or three things and we’ll find something to make with them.</p>
        </div>
        <div style={{ display: "flex", gap: 10 }}><div style={{ flex: 1 }}><HIn icon="carrot" placeholder="e.g. leeks, eggs, cheddar" size="lg" /></div><HB size="lg">Find recipes</HB></div>
      </div>
    </section>
  </main>;
}
window.Home = Home;
