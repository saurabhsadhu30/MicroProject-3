const data = require('./Food.json');
console.log(data)

// List all the food items
function AllFoodItems() {
    return data.map(food => food.foodname);
}

// List all the food items with category vegetables
function FoodItemsVegetable() {
    return data.filter(food => food.category === "Vegetable");
}

// List all the food items with category fruit
function FoodItemsFruit() {
    return data.filter(food => food.category === "Fruit");
}

// List all the food items with category protein
function FoodItemsProtein() {
    return data.filter(food => food.category === "Protein");
}

// List all the food items with category nuts
function FoodItemsNuts() {
    return data.filter(food => food.category === "Nuts");
}

// List all the food items with category grains
function FoodItemsGrains() {
    return data.filter(food => food.category === "Grain");
}

// List all the food items with category dairy
function FoodItemsDairy() {
    return data.filter(food => food.category === "Dairy");
}

// List all the food items with calorie above 100
function FoodItemsCalorieAbove100() {
    return data.filter(food => food.calorie > 100);
}

// List all the food items with calorie below 100
function FoodItemsCalorieBelow100() {
    return data.filter(food => food.calorie < 100);
}

// List all the food items with highest protein content to lowest
function FoodItemsHighestProteinContentToLowest() {
    return data.sort((a, b) => b.protiens - a.protiens);
}

// List all the food items with lowest carb content to highest
function FoodItemsLowestCarbContentToHighestCarbContent() {
    return data.sort((a, b) => a.cab - b.cab);
}


console.log(AllFoodItems());
console.log(FoodItemsVegetable());
console.log(FoodItemsFruit());
console.log(FoodItemsProtein());
console.log(FoodItemsNuts());
console.log(FoodItemsGrains());
console.log(FoodItemsDairy());
console.log(FoodItemsCalorieAbove100());
console.log(FoodItemsCalorieBelow100());
console.log(FoodItemsHighestProteinContentToLowest());
console.log(FoodItemsLowestCarbContentToHighestCarbContent());