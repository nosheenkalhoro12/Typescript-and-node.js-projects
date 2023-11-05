#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
// Displays title by using node-banner
async function title() {
    console.clear();
    return await new Promise(async (resolve) => {
        await showBanner(`Adventure_Game' `, '\t    Adventure_Game', 'red', 'yellow');
        console.log("");
        resolve(true);
    });
}
;
await title();
//classes for players
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    ;
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    ;
    fuelIncrease() {
        this.fuel = 100;
    }
    ;
}
;
class opponentPlayer {
    constructor(name) {
        this.name = " ";
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    ;
    fuelIncrease() {
        this.fuel = 100;
    }
}
;
//Player name and seclection of opponent
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "please enter your name",
});
let opponentplayer = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "please your option",
    choices: ["Start", "Exit"],
});
let P1 = new Player(player.name);
let opponent1 = new opponentPlayer(opponentplayer.select);
if (opponentplayer.select === "Exit") {
    console.log(chalk.bold.italic.redBright("Good Luck"));
}
;
do {
    if (opponentplayer.select === "Start") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "please your opponent",
            choices: ["attack", "drink portion", "run for life..."],
        });
        if (ask.opt === "attack") {
            let num = Math.floor(Math.random() * 2);
            console.log(num);
            if (num > 0) {
                P1.fuelDecrease();
                console.log(chalk.bold.red(`${P1.name} fuel  is ${P1.fuel}`));
                console.log(chalk.bold.green(`${opponent1.name} fuel  is ${opponent1.fuel}`));
                if (P1.fuel <= 0) {
                    console.log(chalk.bold.redBright("You loose, better luck next time"));
                }
                ;
            }
            ;
            if (num <= 0) {
                opponent1.fuelDecrease();
                console.log(chalk.bold.red(`${opponent1.name} fuel  is ${opponent1.fuel}`));
                console.log(chalk.bold.green(`${P1.name} fuel  is ${P1.fuel}`));
                if (P1.fuel <= 0) {
                    console.log(chalk.bold.greenBright("You Win"));
                }
                ;
            }
            ;
        }
        ;
        if (ask.opt === "drink portion") {
            P1.fuelIncrease();
            console.log(chalk.bold.italic.green(` Drink heath portion and, you fuel is ${P1.fuel}`));
        }
        ;
        if (ask.opt === "run for life...") {
            console.log(chalk.bold.redBright("You loose, better luck next time"));
            process.exit;
        }
        ;
    }
    ;
} while (true);
