

 

import inquirer from "inquirer";
import chalk from "chalk";

export async function recheck() {
        let again =await inquirer.prompt ({
        message: chalk.yellow("do you want to recheck values?"),
        name: "input",
        type: "list",
        choices: ["yes","no"],
    });
};

 





