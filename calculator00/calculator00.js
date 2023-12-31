#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { recheck } from './fun1.js';
let results = await inquirer.prompt([
    {
        message: chalk.blueBright(" kindly enter first number"),
        name: "num1",
        type: "number",
    },
    { message: chalk.green(" kindly enter second number"),
        name: "num2",
        type: "number",
    },
    { message: chalk.red(" kindly select operator "),
        name: "operator",
        type: "list",
        choices: ["+", "-", "*", "/", "%", "**"],
    },
]);
if (results.operator === "+") {
    console.log(chalk.bgGreen(`the addition of two numbers = ${results.num1 + results.num2}`));
}
else if (results.operator === "-") {
    console.log(chalk.bgRed(`the subtraction of two numbers = ${results.num1 - results.num2}`));
}
else if (results.operator === "*") {
    console.log(chalk.bgGreenBright(`the multiplication of two numbers = ${results.num1 * results.num2}`));
}
else if (results.operator === "/") {
    console.log(chalk.bgYellow(`the division of two numbers = ${results.num1 / results.num2}`));
}
else if (results.operator === "%") {
    console.log(chalk.bgRedBright(`the modulus of two numbers = ${results.num1 % results.num2}`));
}
else if (results.operator === "**") {
    console.log(chalk.bgCyan(`the exponaition of two numbers = ${results.num1 ** results.num2}`));
}
recheck(); //call the function from fun1 file
