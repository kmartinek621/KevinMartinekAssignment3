let desserts = new Array("Donuts", " Fritters", " Crullers", " Pies", " Muffins");
let meats = new Array(" Hamburgers", " Fried Chicken", " Porkchops", " Ribs");
let breakfast = new Array(" Omelettes", " Pancakes", " Waffles", " French Toast");
let recipes = new Array(desserts, meats, breakfast);
console.log(recipes)

let favoriteFood = recipes[0][0];
console.log(favoriteFood)

let amount = desserts.length + meats.length + breakfast.length;
console.log(amount) 