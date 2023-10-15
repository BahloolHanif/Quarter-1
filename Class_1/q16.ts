// Array of people to invite to dinner
const guestsLists = ["Bahlool", "Asif", "Ali"];

// Find out that one guest can't make it
const guestsWhoCantMakeIt = "Asif";

// Remove the guest who can't make it
const indexOfGuestsWhoCantMakeIt = guestsList.indexOf(guestWhoCantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    guestsList.splice(indexOfGuestWhoCantMakeIt, 1);
}

// Add a replacement guest
const replacementGuests = "Ahmed";
guestsList.push(replacementGuest);

// Inform people about the bigger dinner table
console.log("Good news! We've found a bigger dinner table.");

// Add more guests
const newGuests = ["Sara", "Hassan", "Lina"];
guestsList.unshift("David");
guestsList.splice(Math.floor(guestsList.length / 2), 0, "Eve");
guestsList.push(...newGuests);

// Send out new invitations
guestsList.forEach(person => {
    console.log(`Dear ${person},\nYou are invited to dinner. Please join us for a delightful evening.`);
});
