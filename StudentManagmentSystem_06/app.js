#!/usr/bin/env node
import inquirer from "inquirer";
import showBanner from "node-banner";
import chalk from "chalk";
// Displays title by using node-banner
async function title() {
    console.clear();
    return await new Promise(async (resolve) => {
        await showBanner(`S_M_System' `, '\t    Student_Managment_System', 'red', 'yellow');
        console.log("");
        resolve(true);
    });
}
;
await title();
// Student managment system
class Student {
    constructor(id, name, grade) {
        this.id = id;
        this.name = name;
        this.grade = grade;
    }
}
;
//create class for managment system and creat different methods for adding removing, finding students etc.
class ManagementSystem {
    constructor() {
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    ;
    findStudentById(id) {
        return this.students.find((student) => student.id === id);
    }
    ;
    removeStudent(id) {
        const index = this.students.findIndex((student) => student.id === id);
        if (index !== -1) {
            this.students.splice(index, 1);
        }
        ;
    }
    ;
    getAllStudents() {
        return this.students;
    }
    ;
}
;
const studentSystem = new ManagementSystem();
const studentQuestions = [
    {
        type: "input",
        name: "name",
        message: chalk.bgGreen.italic("student Name:"),
    },
    {
        type: "number",
        name: "id",
        message: chalk.bgYellow.italic("student id umber:"),
    },
    {
        type: "number",
        name: "grade",
        message: chalk.bgBlue.italic("student grade:"),
    },
];
const mainMenu = () => {
    inquirer.prompt([{
            type: "list",
            name: "choice",
            message: "choise an option:",
            choices: [
                "Add Student",
                "Find Student",
                "Remove Student",
                "View All Students",
                "Exit",
            ]
        }])
        .then((answers) => {
        switch (answers.choice) {
            case "Add Student":
                inquirer.prompt(studentQuestions).then((studentData) => {
                    const newStudent = new Student(studentSystem.getAllStudents().length + 1, studentData.name, studentData.grade);
                    studentSystem.addStudent(newStudent);
                    console.log(chalk.bold.bgBlue("Successfully Added."));
                    mainMenu();
                });
                break;
            case "Find Student":
                inquirer.prompt([{
                        type: "number",
                        name: "id",
                        message: "Enter Id:",
                    },
                ])
                    .then((studentData) => {
                    const findStudent = studentSystem.findStudentById(studentData.id);
                    if (findStudent) {
                        console.log("Student found:", findStudent);
                    }
                    else {
                        console.log(chalk.redBright("Student not found."));
                    }
                    mainMenu();
                });
                break;
            case "Remove Student":
                inquirer.prompt([{
                        type: "number",
                        name: "id",
                        message: "enter student id number to remove:",
                    }]).then((studentData) => {
                    studentSystem.removeStudent(studentData.id);
                    console.log(chalk.bgGreen("Student removed successfully."));
                    mainMenu();
                });
                break;
            case "View All Students":
                console.log("All Students:", studentSystem.getAllStudents());
                mainMenu();
                break;
            case "Exit":
                console.log(chalk.bgYellow("Exiting the program."));
                break;
        }
    });
};
mainMenu();
