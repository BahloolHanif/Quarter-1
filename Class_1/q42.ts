function show_magicians(magicians: string[]) {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

// Create an array of magician's names
const magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Call the make_great function to modify the names
make_great(magicianNames);

// Call the show_magicians function to display the modified names
show_magicians(magicianNames);
