import * as inquirer from 'inquirer';

// Define a data structure for tasks
interface Task {
    name: string;
    completed: boolean;
}

// An array to store the tasks
const tasks: Task[] = [];

const mainMenu = () => {
    inquirer
        .prompt({
            type: 'list',
            name: 'option',
            message: 'Choose an option:',
            choices: ['Add Task', 'List Tasks', 'Complete Task', 'Quit'],
        })
        .then((answers) => {
            switch (answers.option) {
                case 'Add Task':
                    addTask();
                    break;
                case 'List Tasks':
                    listTasks();
                    break;
                case 'Complete Task':
                    completeTask();
                    break;
                case 'Quit':
                    return;
            }
        });
};

const addTask = () => {
    inquirer
        .prompt({
            type: 'input',
            name: 'taskName',
            message: 'Enter a task:',
        })
        .then((answer) => {
            tasks.push({ name: answer.taskName, completed: false });
            console.log('Task added.');
            mainMenu();
        });
};

const listTasks = () => {
    console.log('Tasks:');
    tasks.forEach((task, index) => {
        const status = task.completed ? '✔' : ' ';
        console.log(`[${index + 1}] ${status} ${task.name}`);
    });
    mainMenu();
};

const completeTask = () => {
    inquirer
        .prompt({
            type: 'input',
            name: 'taskIndex',
            message: 'Enter the task number to complete:',
        })
        .then((answer) => {
            const index = parseInt(answer.taskIndex) - 1;
            if (index >= 0 && index < tasks.length) {
                tasks[index].completed = true;
                console.log('Task completed.');
            } else {
                console.log('Invalid task number.');
            }
            mainMenu();
        });
};

mainMenu();
