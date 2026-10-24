# Hearth — recipe site design system

**Hearth** is a *working name* (no brand name or logo was supplied). It's a design system for a recipe website whose defining quality is **warmth**: browns, beiges and orange, with clear, highly legible type.

Sources: none — built from the brief ("warmth… browns, beige, orange… clear typography"). No codebase, Figma or logo was provided.

## Index
- `styles.css` — entry point; @imports only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css` (space, radii, sizes), `effects.css` (shadows, motion, overlays), `base.css` (body + link resets).
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `components/` — React primitives, each `Name.jsx` + `.d.ts` + `.prompt.md`:
  - core: Icon, Button, IconButton
  - forms: Input, Select, Checkbox, Radio, Switch, Stepper
  - display: Badge, Tag, Rating, RecipeMeta
  - recipe: ImagePlaceholder, RecipeCard, IngredientList, MethodStep
  - navigation: Tabs
  - feedback: Dialog, Toast, Tooltip
- `ui_kits/website/` — click-through recipe site: Home, Recipe page, Search.
- `ds-loader.js` — exposes components as `window.DS` (compiled bundle if present, else in-browser compile).
- `SKILL.md` — Agent Skill wrapper.

**Intentional additions** (no source inventory existed): Icon (Lucide wrapper), Stepper (servings scaler), Rating, RecipeMeta, ImagePlaceholder, RecipeCard, IngredientList, MethodStep — recipe-specific needs.

## CONTENT FUNDAMENTALS
- **Voice:** a friend who cooks well, standing next to you. Warm, plain, confident; never precious or chef-y.
- **Person:** "you" for the reader, "we" for the kitchen. "We make this every Sunday." "You'll want a heavy pan."
- **Casing:** Sentence case everywhere — titles, buttons, nav ("Save recipe", "Start cooking"). Eyebrows are the only uppercase (via CSS, written in sentence case).
- **Recipe titles:** lead with the honest description, flavour first: "Brown butter pear cake", "Slow Sunday ragù". No "best ever", no "easy" in the title.
- **Method copy:** imperative, one action per step, sensory cues over clock times: "until soft and sweet, the colour of weak tea". Give a time *and* a cue.
- **Quantities:** metric first, kitchen fractions (½ tsp), "g" / "ml" / "tbsp" / "tsp" abbreviations, no full stops.
- **Microcopy:** short and kind. Empty state: "Nothing yet — try fewer filters." Toast: "Saved to your recipe box." Errors say how to fix: "Use minutes, e.g. 20".
- **Emoji:** never. **Exclamation marks:** almost never.
- **Numbers:** "45 min", "1 hr 10", "Serves 4", "Makes 12".

## VISUAL FOUNDATIONS
- **Colour:** cream page (`--cream-100`), cream-50 raised surfaces, beige-200 sunken panels. Text is brown, never black (`--brown-900` primary, 700 secondary, 600 muted). Orange is the single accent: primary buttons (`--orange-600`), eyebrows and links (`--orange-700`), stars (`--orange-500`), soft accent panels (`--orange-100`). Dark brown (`--brown-900`) is the inverse ground (footer, toasts, selected chips, tooltips). Semantics borrow the kitchen: herb green = done/success, saffron = warning, tomato = danger. All colours in OKLCH; whites stay under 0.02 chroma.
- **Type:** *Young Serif* (single weight) for display, headings and recipe titles — chunky, friendly, bookish. *Figtree* for everything else — open, round, very legible at small sizes. Body 16–18px at 1.6 line-height, measure ~66ch. Numbers in ingredient lists use tabular figures. Eyebrows: Figtree 700, 12px, +0.12em, uppercase, orange-700. Never set body copy in the serif; never bold the serif.
- **Spacing:** 4px base (4, 8, 12, 16, 24, 32, 48, 64, 96). 24 is the default gap; sections separate by 80–96. Container 1200px, 24px gutters. Generous whitespace — calm, not dense.
- **Corners:** soft and generous. Inputs 8, cards/images 14, panels/dialogs 20, hero images 28. Buttons, tags, toasts, steppers are full pills. Nothing sharp.
- **Cards:** recipe cards have *no box* — the rounded photo is the card, with title and meta below on the page ground. Panels that need containment (ingredients sidebar, dialogs) use cream-50 + `--shadow-sm`/`--shadow-lg`, no border. Borders are reserved for inputs, outline buttons and hairline list dividers (`--border-subtle`). No coloured left-border cards.
- **Shadows:** always brown-tinted (oklch brown at 6–24% alpha), soft and low. xs at rest, md on hover, lg for overlays.
- **Backgrounds:** flat cream. No gradients except the photo scrim (`--image-scrim`) for text on images. No patterns or textures; the striped fill is only for image placeholders.
- **Imagery:** warm, natural daylight, real kitchens and tables, slight grain fine; overhead or 45°. Hands at work welcome. Avoid cold, blue-white or heavily styled studio shots. Full-bleed or large-radius hero; 4:3 for cards; 21:9 recipe hero.
- **Motion:** gentle and quick. 120ms for colour, 200ms for movement, `--ease-out`. No bounces, no spring overshoot. Cards lift 2px on hover; switches slide.
- **Hover:** fills darken one step (orange-600 → 700, beige-200 → 300); ghost elements gain a beige-200 fill; card titles underline. **Press:** buttons scale to 0.97. **Focus:** 3px apricot ring (`--focus-ring`) + orange border.
- **Transparency & blur:** only the sticky header (92% cream + 10px blur) and the overlay icon buttons on photos. Modal scrim is 50% brown-900.
- **Layout:** sticky header; recipe page has a sticky ingredients panel left of the method on desktop.

## ICONOGRAPHY
- **Lucide** (2px stroke, rounded caps/joins), loaded from the unpkg CDN (`lucide-static@0.460.0`) and inlined by `<Icon name="…"/>`, so it inherits `currentColor`. No icon files are stored locally — this is a substitution choice, not from a brand source.
- Sizes: 16 inline with small text, 18–20 in controls, 22–24 standalone. Icons sit in brown-600/700 by default; orange only for active state (saved heart) or stars.
- Common glyphs: clock, users, flame, timer, chef-hat, heart, bookmark, search, printer, share-2, leaf, soup, cookie, utensils, check, x, plus, minus, chevron-down.
- No emoji, no unicode icons (except kitchen fractions ½ ¼ ⅔ as text).
- **Logo:** none supplied. The name is set in Young Serif as a plain wordmark placeholder.
