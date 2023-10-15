import * as inquirer from 'inquirer';

// Generate a random number between 1 and 100 (adjust the range as needed)
const targetNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

const playGame = () => {
    inquirer
        .prompt({
            type: 'input',
            name: 'guess',
            message: 'Guess the number (between 1 and 100):',
            validate: (input) => {
                const number = parseInt(input);
                if (isNaN(number) || number < 1 || number > 100) {
                    return 'Please enter a valid number between 1 and 100.';
                }
                return true;
            },
        })
        .then((answers) => {
            const userGuess = parseInt(answers.guess);
            attempts++;

            if (userGuess < targetNumber) {
                console.log('Too low! Try again.');
                playGame();
            } else if (userGuess > targetNumber) {
                console.log('Too high! Try again.');
                playGame();
            } else {
                console.log(`Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`);
            }
        });
};

// Start the game
console.log('Welcome to the Guess the Number game!');
playGame();
