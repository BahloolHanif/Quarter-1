//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Define a type for a country object
type Country = {
    name: string;
    population: number;
    capital: string;
    language: string;
};

// Create objects for three different countries
const country1: Country = {
    name: "United States",
    population: 331002651,
    capital: "Washington, D.C.",
    language: "English",
};

const country2: Country = {
    name: "France",
    population: 65273511,
    capital: "Paris",
    language: "French",
};

const country3: Country = {
    name: "Japan",
    population: 126476461,
    capital: "Tokyo",
    language: "Japanese",
};

// Print the information about the countries
console.log("Country 1:", country1);
console.log("Country 2:", country2);
console.log("Country 3:", country3);
