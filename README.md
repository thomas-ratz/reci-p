# Reci-p

Personal recipe site, built by GitHub Pages (Jekyll) on every push.

## Add a recipe

Create `_recipes/my-dish.md` (the filename becomes the URL):

```markdown
---
title: My dish
description: One line about it.     # optional
time: 30 min                        # optional
serves: 4                           # optional
source: Grandma                     # optional
image: /assets/img/my-dish.jpg      # optional, put the photo in assets/img/
tags: [dinner, vegetarian]
ingredients:
  - 200 g flour
  - "For the sauce:"                # a line ending in ":" becomes a group heading
  - 1 tin tomatoes
---

## Method

1. First step.
2. Second step.

## Notes

Anything else.
```
