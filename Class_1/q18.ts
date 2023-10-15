// Create an array of places to visit
const placesToVisit = [
    "Paris",
    "Kyoto",
    "Machu Picchu",
    "Santorini",
    "Banff"
];

// Print the array in its original order
console.log("Original Order:");
console.log(placesToVisit);

// Print the array in alphabetical order without modifying the original list
const sortedAlphabetically = [...placesToVisit].sort();
console.log("\nAlphabetical Order (without modifying the original list):");
console.log(sortedAlphabetically);

// Show that the original array is still in its original order
console.log("\nOriginal Order (unchanged):");
console.log(placesToVisit);

// Print the array in reverse alphabetical order without modifying the original list
const sortedReverseAlphabetically = [...placesToVisit].sort().reverse();
console.log("\nReverse Alphabetical Order (without modifying the original list):");
console.log(sortedReverseAlphabetically);

// Show that the original array is still in its original order
console.log("\nOriginal Order (unchanged):");
console.log(placesToVisit);

// Reverse the order of the original list
placesToVisit.reverse();
console.log("\nReversed Order (original list changed):");
console.log(placesToVisit);

// Reverse the order of the original list again to restore it to its original order
placesToVisit.reverse();
console.log("\nOriginal Order (restored):");
console.log(placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("\nAlphabetical Order (original list changed):");
console.log(placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nReverse Alphabetical Order (original list changed):");
console.log(placesToVisit);
