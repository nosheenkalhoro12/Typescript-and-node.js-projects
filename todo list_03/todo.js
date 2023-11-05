#!/usr/bin/env node
import inquirer from "inquirer";
import showBanner from 'node-banner';
import chalk from "chalk";
import ora from "ora";
// Displays title by using node-banner
async function title() {
    console.clear();
    return await new Promise(async (resolve) => {
        await showBanner(`Todo List' s`, '\t    Todo App', 'green', 'yellow');
        console.log("");
        resolve(true);
    });
}
await title();
//user input and todo list operations
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        { type: "input",
            name: "todo",
            message: "what you want to add?",
        },
        {
            type: "confrim",
            name: "addMore",
            message: "Do you want to add more?",
            default: false
        },
    ]);
    const { todo, addMore } = answers; //restructring
    loop = addMore;
    if (todo) {
        todos.push(todo);
    }
    else {
        console.log("please enter valid input");
    }
    ;
}
;
if (todos.length > 0) {
    console.log("your todo list is");
    todos.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("no todo list found");
}
;
