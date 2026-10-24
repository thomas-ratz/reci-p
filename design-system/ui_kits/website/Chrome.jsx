const { Button, IconButton, Icon, Input } = window.DS;
function Header({ onNav, page }) {
  const link = (id, label) => <a href="#" onClick={e => { e.preventDefault(); onNav(id); }} style={{ font: "500 15px var(--font-body)", color: page === id ? "var(--text-primary)" : "var(--text-secondary)", textDecoration: page === id ? "underline" : "none", textUnderlineOffset: 6, textDecorationColor: "var(--orange-500)", textDecorationThickness: 2 }}>{label}</a>;
  return <header style={{ position: "sticky", top: 0, zIndex: 10, background: "oklch(0.968 0.016 78 / 0.92)", backdropFilter: "blur(10px)", borderBottom: "1px solid var(--border-subtle)" }}>
    <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--container-pad)", height: 72, display: "flex", alignItems: "center", gap: 32 }}>
      <a href="#" onClick={e => { e.preventDefault(); onNav("home"); }} style={{ font: "400 28px var(--font-display)", color: "var(--brown-900)", textDecoration: "none" }}>Hearth</a>
      <nav style={{ display: "flex", gap: 24 }}>{link("search", "Recipes")}{link("search2", "Collections")}{link("search3", "Techniques")}</nav>
      <div style={{ flex: 1 }} />
      <IconButton icon="search" label="Search" variant="ghost" onClick={() => onNav("search")} />
      <IconButton icon="heart" label="Saved" variant="ghost" />
      <Button size="sm" variant="secondary">Sign in</Button>
    </div>
  </header>;
}
function Footer() {
  return <footer style={{ background: "var(--surface-inverse)", color: "var(--cream-100)", marginTop: 96 }}>
    <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "56px var(--container-pad)", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 48 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <span style={{ font: "400 32px var(--font-display)", color: "var(--orange-200)" }}>Hearth</span>
        <p style={{ margin: 0, color: "var(--beige-300)", maxWidth: 360 }}>A letter from our kitchen every Sunday — one recipe, worth making.</p>
        <div style={{ display: "flex", gap: 8, maxWidth: 420 }}><div style={{ flex: 1 }}><Input placeholder="Your email" /></div><Button>Subscribe</Button></div>
      </div>
      {[["Cook", ["Weeknight", "Baking", "Soups", "Vegetarian"]], ["About", ["Our kitchen", "Contributors", "Contact"]]].map(([h, ls]) => <div key={h} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <span style={{ font: "700 12px var(--font-body)", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--sand-400)" }}>{h}</span>
        {ls.map(l => <a key={l} href="#" style={{ color: "var(--cream-100)", textDecoration: "none" }}>{l}</a>)}
      </div>)}
    </div>
  </footer>;
}
Object.assign(window, { Header, Footer });
