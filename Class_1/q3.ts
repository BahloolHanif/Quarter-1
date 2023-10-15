//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let person = "Bahlool hanif";

// Convert to lowercase
let lowercaseName = person.toLowerCase();

// Convert to uppercase
let uppercaseName = person.toUpperCase();

// Convert to titlecase
let titlecaseName = person.replace(/\b\w/g, (char) => char.toUpperCase());

console.log("Original Name: " + person);
console.log("Lowercase Name: " + lowercaseName);
console.log("Uppercase Name: " + uppercaseName);
console.log("Titlecase Name: " + titlecaseName);
