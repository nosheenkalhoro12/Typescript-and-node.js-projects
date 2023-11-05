#!/usr/bin/env node

import inquirer from "inquirer";
import {faker} from "@faker-js/faker";
import chalk from "chalk";
import { title } from "./exit.js";
import { Exit } from "./exit.js";


// classes are blue print of object 
//custmer class
class Customer {
    firstName:string
    lastName: string
    age: number
    mobileNumber: number
    accountNumber: number
    
// we give valueto above properties through constructor function
    constructor(firstName:string,lastName: string,age:number, mobileNumber:number, accountNumber:number,)
    {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.mobileNumber = mobileNumber
        this .accountNumber = accountNumber
    };
};

//bank interface
interface BankAccount {
    accountnumber : number,
    balance : number,
};

//bank class
class Bank {
    customer : Customer[] = [];
    account : BankAccount [] = [];

 //create function to add customer

    addCustomer(obj:Customer){
    this.customer.push(obj);
    };

 //create function for account number

     addAccounNumber(obj:BankAccount){
    this.account.push(obj);
    };

 //  transation method
     transation(accObj: BankAccount){
        let newAccount = this.account.filter((acc)=> acc.accountnumber !== accObj.accountnumber
        );
        this.account= [...newAccount,accObj]
     };
};

await title();


let FBLBank = new Bank ();
///console.log(FBLBank);// we get customer and account empty array

//create customer with loop and faker

for (let i:number=1; i<=3; i++){
    let firstName= faker.person.firstName();
    let lastName = faker.person.lastName();
    let mobileNumber = parseInt(faker.phone.number("3##########"));         //parseInt() convert string into number
    const cust= new Customer (firstName, lastName,18  * i, mobileNumber,1000 +i);
    ///console.log(cust) 
    FBLBank.addCustomer(cust);
    FBLBank.addAccounNumber({accountnumber:cust.accountNumber,balance:10000 * i});
};
//console.log(FBLBank);

//FBL Bank Functionality

async function FBLBankService(bank:Bank) {
    let service = await inquirer.prompt({
        type: "list",
        name: "select",
        message: "Please select the service",
        choices: ["View Balance", "Cash Withdraw", "Cash Deposit"],
    });

    //Veiw balance
    if(service.select == "View Balance"){
        let res = await inquirer.prompt({
            type: "input",
            name: "number",
            message: chalk.bold.yellowBright(" Please enter your account number:"),
        });
        let account = FBLBank.account.find((acc)=>acc.accountnumber == res.number);
        if(!account){ console.log (chalk.bold.red("Invalid Account Number"))
        };
        if (account){
            let name = FBLBank.customer.find((item)=> item.accountNumber == account?.accountnumber);
            console.log(`Dear ${name?.firstName} ${name?.lastName} your account balance is ${account.balance}`);
        };

    
    };    
    //Cash Withdraw
    if(service.select == "Cash Withdraw"){
        let res = await inquirer.prompt({
            type: "input",
            name: "number",
            message: " Please enter your account number:",
        });
        let account = FBLBank.account.find((acc)=>acc.accountnumber == res.number)
        if(!account){ console.log (chalk.bold.red("Invalid Account Number"));        };
        if(account){
            let answer = await inquirer.prompt({
                type: "number",
                name: "Rupees",
                message: chalk.bold.green("Please enter youe amount"),
            });
            let newBalance = account.balance - answer.Rupees;
            // call transation method from bank class
            bank.transation({accountnumber:account.accountnumber,balance:newBalance});
            console.log(newBalance);
        };

       

    };


    //Cash Deposit
    if(service.select == "Cash Deposit"){
        let res = await inquirer.prompt({
            type: "input",
            name: "number",
            message: " Please enter your account number:",
        });
        let account = FBLBank.account.find((acc)=>acc.accountnumber == res.number);
        if(!account){ console.log (chalk.bold.red("Invalid Account Number"));
        };
        if(account){
            let answer = await inquirer.prompt({
                type: "number",
                name: "Rupees",
                message: "Please enter youe amount",
            });
            let newBalance = account.balance + answer.Rupees
            // call transation method from bank class
            bank.transation({accountnumber:account.accountnumber,balance:newBalance});
            console.log(newBalance);
        };   

    };

    
};

await FBLBankService(FBLBank);


Exit();

