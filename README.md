# Reci-p

Personal recipe site, built by GitHub Pages (Jekyll) on every push.

## Add a recipe

Create `_recipes/my-dish.md` (the filename becomes the URL):

```markdown
---
title: My dish
description: One line about it.     # optional
version: 1 kg mascarpone, 400 ml…   # optional, what makes this revision different
time: 30 min                        # optional
rest: 12–16 h in the fridge         # optional
serves: 4                           # optional
source: Grandma                     # optional
image: /assets/img/my-dish.jpg      # optional, put the photo in assets/img/
tags: [dinner, vegetarian]
ingredients:
  - 200 g flour
  - "For the sauce:"                # a line ending in ":" becomes a group heading
  - "**400 ml** cream"              # **bold** gets highlighted; quote lines that start with *
  - "_Use only what you need._"     # a line starting with _ is a note, no checkbox
---

## Method

### 1. First phase

1. First step with **200 g** of something.
2. Second step.

> **Tip:** a callout box.

> **Egg safety:** a red warning box.
{: .warn}

## Notes

Anything else. Markdown tables work too.
```

## Design

The look comes from the Hearth design system in `design-system/` (tokens, guidelines, React reference components).
The site loads `design-system/styles.css` for the tokens; `assets/style.css` applies them to these pages.
Only the token CSS is published — the rest of `design-system/` is excluded in `_config.yml`.

Light / Dark / Auto toggle in the header (saved per device; Auto follows the system). The dark theme lives in
`assets/style.css` under `[data-theme="dark"]`.

## App (PWA)

The site installs as an app ("Add to Home Screen" on phones, install icon in desktop Chrome/Edge) and works offline:
`sw.js` stores every recipe page on first visit, and Jekyll regenerates that list on each build, so new recipes are
included automatically. Pages load fresh when online and from storage when offline. App icons are in `assets/icons/`.

## Scaling

The amount stepper in the ingredients panel goes from ¼× to 6×. It scales every number followed by a unit
(g, kg, ml, l, tsp, tbsp, cup, tin, clove, egg…), the leading count of an ingredient line ("4 eggs"), and **bold**
amounts in the steps. Temperatures, times and percentages are never touched.

## Preview locally

Needs Docker Desktop running:

```
docker run --rm -p 4000:4000 -v "%cd%:/site" -v reci-p-gems:/usr/local/bundle -w /site ruby:3.3 sh -c "gem list -i jekyll -v 3.10.0 || gem install --no-document jekyll:3.10.0 kramdown-parser-gfm webrick; jekyll serve --host 0.0.0.0 --force_polling --destination /tmp/_site"
```

Then open http://localhost:4000/reci-p/
