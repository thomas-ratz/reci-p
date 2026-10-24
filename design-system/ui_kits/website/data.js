window.RECIPES = [
  { id: "ragu", title: "Slow Sunday ragù", category: "Mains", time: "3 hr", serves: "Serves 6", rating: 4.9, ratingCount: 512, badge: "Editor’s pick" },
  { id: "pear", title: "Brown butter pear cake", category: "Baking", time: "1 hr 10", serves: "Serves 8", rating: 4.8, ratingCount: 213, badge: "New" },
  { id: "squash", title: "Roasted squash with sage and hazelnuts", category: "Sides", time: "50 min", serves: "Serves 4", rating: 4.6, ratingCount: 88 },
  { id: "dal", title: "Weeknight tomato dal", category: "Weeknight", time: "35 min", serves: "Serves 4", rating: 4.7, ratingCount: 341 },
  { id: "granola", title: "Chai spiced granola", category: "Breakfast", time: "40 min", serves: "Makes 1 jar", rating: 4.5, ratingCount: 64 },
  { id: "soup", title: "Smoky lentil and carrot soup", category: "Soups", time: "45 min", serves: "Serves 4", rating: 4.6, ratingCount: 120 },
  { id: "buns", title: "Cardamom morning buns", category: "Baking", time: "2 hr 30", serves: "Makes 12", rating: 4.9, ratingCount: 278, badge: "New" },
  { id: "pasta", title: "Burnt butter and miso pasta", category: "Weeknight", time: "20 min", serves: "Serves 2", rating: 4.8, ratingCount: 402 },
];
window.RAGU = {
  intro: "The kind of sauce that fills the house. Start it after lunch, let it blip away all afternoon, and dinner takes care of itself.",
  groups: [
    { title: "For the ragù", items: [ { qty: 2, unit: "tbsp", name: "olive oil" }, { qty: 1, name: "onion", note: "finely diced" }, { qty: 2, name: "carrots", note: "finely diced" }, { qty: 2, name: "celery sticks", note: "finely diced" }, { qty: 500, unit: "g", name: "beef mince" }, { qty: 250, unit: "g", name: "pork mince" }, { qty: 2, unit: "tbsp", name: "tomato paste" }, { qty: 250, unit: "ml", name: "red wine" }, { qty: 800, unit: "g", name: "chopped tomatoes" } ] },
    { title: "To serve", items: [ { qty: 600, unit: "g", name: "pappardelle" }, { qty: 50, unit: "g", name: "parmesan", note: "grated" } ] },
  ],
  steps: [
    ["Soften the base", "Warm the oil in a heavy pan over low heat. Add the onion, carrot and celery with a pinch of salt and cook gently until soft and sweet.", "15 min"],
    ["Brown the meat", "Turn the heat up. Add both minces and break them up, letting them catch and colour before you stir. Colour is flavour.", "10 min"],
    ["Add the paste and wine", "Stir in the tomato paste and cook until it darkens. Pour in the wine and let it bubble away by half.", "5 min"],
    ["Low and slow", "Add the tomatoes and a splash of water. Partly cover and let it barely simmer, stirring now and then, until rich and thick.", "2 hr 30"],
    ["Toss and serve", "Cook the pasta in well-salted water. Toss with the ragù and a splash of pasta water. Finish with parmesan."],
  ],
};
