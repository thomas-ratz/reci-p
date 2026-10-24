Ingredient list with quantity scaling and tick-off.
```jsx
<IngredientList scale={servings/4} groups={[{ title: "For the cake", items: [{ qty: 250, unit: "g", name: "plain flour" }, { qty: 0.5, unit: "tsp", name: "sea salt" }] }]} />
```
Quantities render as kitchen fractions (½, ¼, ⅔).
