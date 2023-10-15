// Store your favorite pizza names in an array
const favoritePizzas: string[] = ["Pepperoni", "Margherita", "Supreme"];

// Loop through the array to print the pizza names
console.log("My favorite pizzas are:");
for (const pizza of favoritePizzas) {
    console.log(pizza);
}

// Modify the loop to print a statement about each pizza
console.log("\nMore about my favorite pizzas:");
for (const pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Add a final statement
console.log("\nI really love pizza!");
