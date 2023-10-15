function make_shirt(size: string = "Large", message: string = "I love TypeScript") {
    console.log(`You have ordered a ${size}-sized shirt with the message: "${message}".`);
}

// Create a default large shirt
make_shirt();

// Create a default medium shirt
make_shirt("Medium");

// Create a different-sized shirt with a custom message
make_shirt("Small", "TypeScript Rocks!");
