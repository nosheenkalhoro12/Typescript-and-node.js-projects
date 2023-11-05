#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let generateNumber = Math.floor(Math.random() * 10);
console.log(generateNumber);
const answer = await inquirer.prompt([{
        type: "number",
        name: "userGuess",
        message: " please guess number between 1 to 10",
    }]);
const userGuess = answer.userGuess;
if (userGuess === generateNumber) {
    console.log(chalk.greenBright("correct guess \n you win"));
}
else {
    console.log(chalk.bgRedBright("try again"));
}
;
//let generateNumber=Math.random()*10; this syntex generate number in points eg 0.556666with the help
// Math.length  it will generate number55666 instead of points.
