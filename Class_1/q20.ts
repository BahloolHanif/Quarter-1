//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

const mountainPeaks = [
    "Mount Everest",
    "K2",
    "Matterhorn",
    "Kilimanjaro",
    "Denali",
    "Mount Fuji",
    "Mont Blanc",
    "Aconcagua",
    "Mount Rainier",
    "Grand Teton"
];

// Print the list of mountain peaks
console.log("List of Famous Mountain Peaks:");
for (let i = 0; i < mountainPeaks.length; i++) {
    console.log(mountainPeaks[i]);
}
