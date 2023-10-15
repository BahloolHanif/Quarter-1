"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer = require("inquirer");
// An array to store the tasks
var tasks = [];
var mainMenu = function () {
    inquirer
        .prompt({
        type: 'list',
        name: 'option',
        message: 'Choose an option:',
        choices: ['Add Task', 'List Tasks', 'Complete Task', 'Quit'],
    })
        .then(function (answers) {
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
var addTask = function () {
    inquirer
        .prompt({
        type: 'input',
        name: 'taskName',
        message: 'Enter a task:',
    })
        .then(function (answer) {
        tasks.push({ name: answer.taskName, completed: false });
        console.log('Task added.');
        mainMenu();
    });
};
var listTasks = function () {
    console.log('Tasks:');
    tasks.forEach(function (task, index) {
        var status = task.completed ? '✔' : ' ';
        console.log("[".concat(index + 1, "] ").concat(status, " ").concat(task.name));
    });
    mainMenu();
};
var completeTask = function () {
    inquirer
        .prompt({
        type: 'input',
        name: 'taskIndex',
        message: 'Enter the task number to complete:',
    })
        .then(function (answer) {
        var index = parseInt(answer.taskIndex) - 1;
        if (index >= 0 && index < tasks.length) {
            tasks[index].completed = true;
            console.log('Task completed.');
        }
        else {
            console.log('Invalid task number.');
        }
        mainMenu();
    });
};
mainMenu();
