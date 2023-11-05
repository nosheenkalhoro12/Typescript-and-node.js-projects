#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// we need currency converter API link
let apiLink = "https://v6.exchangerate-api.com/v6/3462eeac7437687fbc994af9/latest/PKR";
//console.log(apiLink); //link prink no data get so for data make a function
// Data fetch
let fetchData = async (data) => {
    let fetchData = await fetch(data);
    let res = await fetchData.json();
    return res.conversion_rates;
};
let data = await fetchData(apiLink);
//console.log(data) 
// we need country list array
let countries = Object.keys(data);
// console.log(countries);
//userinput for ist country
let firstCountry = await inquirer.prompt({
    type: "list",
    name: "countryOne",
    message: " Converting from",
    choices: countries,
});
//console.log(`converting from ${chalk.greenBright.bold.italic(firstCountry.countryOne)}`);
//User amount for converting
let userAmount = await inquirer.prompt({
    type: "number",
    name: "amount",
    message: `please enter your amount in  ${chalk.greenBright.bold.italic(firstCountry.countryOne)}`
});
//console.log(userAmount.amount)
//user input for 2nd country
let secondCountry = await inquirer.prompt({
    type: "list",
    name: "countryTwo",
    message: " Converting to",
    choices: countries,
});
//console.log(`converting from ${chalk.greenBright.bold.italic(secondCountry.countryTwo)}`);
//fetching data for conversion Rates
let conversionAPI_Rates = `https://v6.exchangerate-api.com/v6/3462eeac7437687fbc994af9/pair/${firstCountry.countryOne}/${secondCountry.countryTwo}`;
//console.log(conversionAPI_Rates); 
// Data fetch for conversion Rates
let conversionRate = async (data) => {
    let conversionRate = await fetch(data);
    let res = await conversionRate.json();
    return res.conversion_rate;
};
let cnv = await conversionRate(conversionAPI_Rates);
//console.log(cnv) //we get conversion 
//multiply userinput(amount) with conversion rates  
let cnvRate = userAmount.amount * cnv;
console.log(`You ${chalk.greenBright.bold(firstCountry.countryOne)} ${chalk.greenBright.bold(userAmount.amount)} in ${chalk.greenBright.bold(secondCountry.countryTwo)} ${chalk.greenBright.bold(cnvRate)}`);
