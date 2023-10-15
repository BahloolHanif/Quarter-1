// Make a list of current usernames
const current_users: string[] = ["John", "Alice", "Bob", "Charlie", "David", "Eric"];

// Make a list of new usernames, including some duplicates with different casing
const new_users: string[] = ["Alice", "John", "Eve", "Frank", "Grace"];

// Function to check if a username is already used
function isUsernameTaken(username: string): boolean {
    const lowerCaseUsername = username.toLowerCase();
    return current_users.some((existingUser) => existingUser.toLowerCase() === lowerCaseUsername);
}

// Loop through the new_users list and check for uniqueness
for (const username of new_users) {
    if (isUsernameTaken(username)) {
        console.log(`Sorry, the username "${username}" is not available. Please choose a different username.`);
    } else {
        console.log(`Congratulations, the username "${username}" is available.`);
    }
}
