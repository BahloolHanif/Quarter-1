// Store the names of animals with a common characteristic in an array
const animals: string[] = ["Dog", "Cat", "Rabbit"];

// Loop through the array to print the animal names
console.log("Animals with a common characteristic:");
for (const animal of animals) {
    console.log(animal);
}

// Modify the loop to print a statement about each animal
console.log("\nMore about these animals:");
for (const animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Add a final statement about what these animals have in common
console.log("\nAny of these animals would make a great pet!");
