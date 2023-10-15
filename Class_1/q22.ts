//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

const fruits = ["apple", "banana", "cherry"];

// Intentionally trying to access an out-of-bounds index
const indexError = fruits[3];

// You can add a check to avoid the error, for example:
if (fruits.length > 3) {
    const correctedValue = fruits[3];
    console.log(correctedValue);
} else {
    console.log("Index is out of bounds.");
}
