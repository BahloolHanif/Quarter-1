//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// Array of modes of transportation
const vehicle = ["motorcycle", "car", "bicycle", "boat"];

// Print statements about these items
for (let i = 0; i < vehicle.length; i++) {
    console.log(`I would like to own a ${vehicle[i]}.`);
}
