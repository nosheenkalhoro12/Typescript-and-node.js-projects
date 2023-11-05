#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { Exit } from "./exit.js";
class student {
    constructor(n) {
        this.name = n;
    }
    ;
}
;
class person {
    constructor() {
        this.students = [];
    }
    addstudent(obj) {
        this.students.push(obj);
    }
    ;
}
;
const persons = new person(); //console.log(persons)// we get empty array
const start = async (persons) => {
    console.log("welcome");
    const ans = await inquirer.prompt({
        type: "list",
        message: "To whom you want to talk?",
        choices: ["Yourself", "Student"],
        name: "Select",
    });
    if (ans.Select == "Yourself") {
        console.log(" let's start");
        console.log(chalk.bold.bgBlue("I have take addmission in PIAIC. I will work hard and become successful."));
    }
    ;
    if (ans.Select == "Student") {
        const answer = await inquirer.prompt({
            type: "input",
            name: "student",
            message: chalk.bold.blueBright("enter name of student"),
        });
        const checkStudent = persons.students.find(val => val.name == answer.student);
        if (!checkStudent) {
            const name = new student(answer.student);
            persons.addstudent(name);
            console.log(chalk.bold.whiteBright(`hello, Welcome, I am ${name.name}.`));
            //console.log(persons.students); // student name store in array
            await inquirer.prompt({
                type: "input",
                name: "user",
                message: chalk.bold.greenBright("What's your good name?"),
            });
            let answers = await inquirer.prompt({
                type: "input",
                name: "userinput",
                message: chalk.bold.yellowBright("What can I do for you?"),
            });
            if (answers.userinput) {
                console.log(chalk.bold.yellow("Your request going to proceed, So, please wait for a moment."));
            }
            else {
                console.log(chalk.bold.red(" Thank you "));
            }
            ;
        }
        ;
        if (checkStudent) {
            console.log(chalk.bold.bgBlue(`hello I am ${student.name}, i am alright............`));
            console.log(persons.students);
        }
        ;
    }
    ;
};
await start(persons);
Exit();
