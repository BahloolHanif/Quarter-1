import * as inquirer from 'inquirer';

const calculate = (operator: string, num1: number, num2: number) => {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return 'Error: Division by zero';
            }
        default:
            return 'Error: Invalid operator';
    }
};

inquirer
    .prompt([
        {
            type: 'input',
            name: 'num1',
            message: 'Enter the first number:',
            validate: (input) => !isNaN(Number(input)),
        },
        {
            type: 'input',
            name: 'operator',
            message: 'Enter the operator (+, -, *, /):',
            validate: (input) => '+-*/'.includes(input),
        },
        {
            type: 'input',
            name: 'num2',
            message: 'Enter the second number:',
            validate: (input) => !isNaN(Number(input)),
        },
    ])
    .then((answers) => {
        const result = calculate(answers.operator, Number(answers.num1), Number(answers.num2));
        console.log(`Result: ${result}`);
    });
