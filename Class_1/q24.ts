//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

// Test 1: Is 5 greater than 3? I predict True.
console.log(5 > 3); // True

// Test 2: Is 10 less than or equal to 8? I predict False.
console.log(10 <= 8); // False

// Test 3: Is 'apple' equal to 'banana'? I predict False.
console.log('apple' === 'banana'); // False

// Test 4: Is 'apple' not equal to 'banana'? I predict True.
console.log('apple' !== 'banana'); // True

// Test 5: Is 3 plus 2 equal to 5? I predict True.
console.log(3 + 2 === 5); // True

// Test 6: Is 4 multiplied by 6 not equal to 25? I predict True.
console.log(4 * 6 !== 25); // True

// Test 7: Is (5 > 3) AND (10 > 8)? I predict True.
console.log((5 > 3) && (10 > 8)); // True

// Test 8: Is (5 > 3) OR (8 < 6)? I predict True.
console.log((5 > 3) || (8 < 6)); // True

// Test 9: Is (true) equal to (false)? I predict False.
console.log(true === false); // False

// Test 10: Is (true) NOT equal to (false)? I predict True.
console.log(true !== false); // True

// Test 11: Is 'apple' equal to 'apple'? I predict True.
console.log('apple' === 'apple'); // True

// Test 12: Is 'apple' not equal to 'orange'? I predict True.
console.log('apple' !== 'orange'); // True

// Test 13: Is 'Hello'.toLowerCase() equal to 'hello'? I predict True.
console.log('Hello'.toLowerCase() === 'hello'); // True

// Test 14: Is 7 greater than 5? I predict True.
console.log(7 > 5); // True

// Test 15: Is 10 less than 8? I predict False.
console.log(10 < 8); // False

// Test 16: Is 5 greater than or equal to 5? I predict True.
console.log(5 >= 5); // True

// Test 17: Is 3 less than or equal to 2? I predict False.
console.log(3 <= 2); // False

// Test 18: Is (true) AND (false)? I predict False.
console.log(true && false); // False

// Test 19: Is (true) OR (false)? I predict True.
console.log(true || false); // True

// Define the 'fruits' array
const fruits = ['apple', 'banana', 'cherry'];

// Test 20: Is 'apple' in the fruits array? I predict True.
console.log(fruits.includes('apple')); // True

// Test 21: Is 'orange' not in the fruits array? I predict True.
console.log(!fruits.includes('orange')); // True
