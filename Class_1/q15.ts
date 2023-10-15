//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite. Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.  Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.   Print a second set of invitation messages, one for each person who is still in your list.

// Array of people to invite to dinner
const guestsList = ["Bahlool", "Asif", "Ali"];

// Find out that one guest can't make it
const guestWhoCantMakeIt = "Asif";

// Remove the guest who can't make it
const indexOfGuestWhoCantMakeIt = guestsList.indexOf(guestWhoCantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    guestsList.splice(indexOfGuestWhoCantMakeIt, 1);
}

// Add a replacement guest
const replacementGuest = "Ahmed";
guestsList.push(replacementGuest);

// Send out new invitations
guestsList.forEach(person => {
    console.log(`Dear ${person},\nYou are invited to dinner. Please join us for a delightful evening.`);
});
