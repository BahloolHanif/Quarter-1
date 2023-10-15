// Create an array of usernames
const usernames: string[] = ["admin", "Alice", "Bob", "Charlie", "David", "Eric"];

if (usernames.length > 0) {
    // Loop through the array and print greetings
    for (const username of usernames) {
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
} else {
    console.log("We need to find some users!");
}

// Remove all usernames from the array
usernames.length = 0;

// Check if the list is empty and print the message
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
