#!/usr/bin/env node

import inquirer from "inquirer";   
//step 1

function countwords(text:string){
    let removeWhiteSpace = text.replace(/\s/g,"") //apply rejix in  function for white space 

    return removeWhiteSpace.length// by adding.length we get number of words
}

//step 2 for input from user

async function userInput(countwords:(text:string)=>number){
do{  
    let user = await inquirer.prompt({
        type: "input",
        message: "write your text-----------",
        name: "text",

    })

    console.log( countwords(user.text))// we get result

}

while(true);
}

userInput(countwords)// call funtion

// because of do {code} and while(true/false)code run cont:














