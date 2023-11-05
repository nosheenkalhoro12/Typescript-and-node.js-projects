#!/usr/bin/env node
import inquirer from "inquirer";
function countwords(text) {
    let removeWhiteSpace = text.replace(/\s/g, "");
    return removeWhiteSpace.length;
}
async function userInput(countwords) {
    do {
        let user = await inquirer.prompt({
            type: "input",
            message: "write your text-----------",
            name: "text",
        });
        console.log(countwords(user.text));
    } while (true);
}
userInput(countwords);
