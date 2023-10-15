function show_magicians(magicians: string[]) {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];

    for (const magician of magicians) {
        greatMagicians.push("the Great " + magician);
    }

    return greatMagicians;
}

// Create an array of magician's names
const magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Call the make_great function to create a new array with "the Great"
const greatMagicianNames: string[] = make_great([...magicianNames]);

// Call show_magicians with the original and modified arrays
console.log("Original Magicians:");
show_magicians(magicianNames);

console.log("\nGreat Magicians:");
show_magicians(greatMagicianNames);
