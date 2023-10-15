function makeSandwich(...items) {
    console.log("Sandwich Order Summary:");
    console.log("Bread: " + items.shift()); // Remove and print the first item as bread
    console.log("Fillings: " + items.join(', ')); // Print the remaining items as fillings
    console.log("Enjoy your sandwich!\n");
}

// Call the function with different numbers of arguments
makeSandwich('White Bread', 'Turkey', 'Lettuce', 'Tomato', 'Mayonnaise');
makeSandwich('Wheat Bread', 'Ham', 'Swiss Cheese');
makeSandwich('Sourdough Bread', 'Chicken', 'Bacon', 'Avocado', 'Ranch Dressing', 'Onion');

