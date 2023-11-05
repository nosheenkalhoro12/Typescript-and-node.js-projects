#!/usr/bin/env node
import inquirer from "inquirer";
import { faker } from "@faker-js/faker";
import showBanner from "node-banner";
import chalk from "chalk";
import ora from "ora";
;
//  Step 2   title banner
async function title() {
    console.clear();
    return await new Promise(async (resolve) => {
        await showBanner(`ATM_Machine' `, '\t    ATM_Machine', 'red', 'yellow');
        console.log("");
        resolve(true);
    });
}
;
await title();
//  Step 3 User Data
const createUser = () => {
    let users = [];
    for (let i = 0; i < 10; i++) {
        let user = {
            id: i,
            pin: 1000 + i,
            name: faker.person.fullName(),
            accountNumber: Math.floor(100000000 * Math.random() * 900000000),
            balance: 100000000 * i,
        };
        users.push(user);
    }
    return users;
};
//  Step 4 ATM Machine
const atmMachine = async (users) => {
    const response = await inquirer.prompt({
        type: "number",
        message: "Write Your Pin Code",
        name: "pin",
    });
    // console.log("Welcome Account Holder")
    const user = users.find((val) => val.pin == response.pin);
    if (user) {
        console.log(`Welcome ${user.name}`);
        atmFunc(user);
        return;
    }
    else {
        console.log("Invalid user pin");
    }
};
//  Step 5  ATM Function
const atmFunc = async (user) => {
    const answer = await inquirer.prompt({
        type: "list",
        name: "select",
        message: "Select the options you want?",
        choices: ["Withdraw", "balance", "deposite", "exit"],
    });
    if (answer.select == "Withdraw") {
        const amount = await inquirer.prompt({
            type: "number",
            message: "Enter amount",
            name: "rupee",
        });
        if (amount.rupee > user.balance) {
            return console.log("Insufficient Balance!");
        }
        // cannot withdraw > 25000
        if (amount.rupee > 25000) {
            return console.log("You cannot withdraw amount greater than 25000");
        }
        console.log(`withdraw amount: ${amount.rupee}`);
        console.log(`balance: ${user.balance - amount.rupee}`);
    }
    if (answer.select == "balance") {
        console.log(`balance: ${user.balance}`);
        return;
    }
    if (answer.select == "deposite") {
        const deposite = await inquirer.prompt({
            type: "number",
            message: "Deposite amount Enter",
            name: "rupee",
        });
        console.log(`Deposite Amoun: ${deposite.rupee}`);
        console.log(`Total Balance : ${user.balance + deposite.rupee}`);
    }
    if (answer.select == "exit") {
        console.log("Thanks for using ATM");
    }
};
const users = createUser();
await atmMachine(users);
// Step 6 End 
function Exit() {
    return new Promise((resolve) => {
        console.log("");
        const spinner = ora(chalk.greenBright.bold.italic("Thank you, Have a Nice Day"));
        spinner.spinner = "triangle";
        spinner.color = "red";
        spinner.start();
        setTimeout(() => {
            spinner.stop();
            console.clear();
            resolve(true);
        }, 10000);
    });
}
;
await Exit();
