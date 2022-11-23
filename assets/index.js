
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const jest = require('jest');



const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');


const direct = path.resolve(__dirname, 'dist')
const outputPath = path.join(direct, 'index.html');

const generate = require('./html_page');


const roster = [];
const identity = [];



function initApp() {

    
    function addManager() {
        console.log("Start building your team profile");
        inquirer.prompt([
            {
                type: "input",
                name: "new_manager",
                message: "what is the name of your manager?",
             
            },
            {
                type: "input",
                name: "IdOfmanager",
                message: "list the managers id?",

            },
            {
                type: "input",
                name: "Email_manager",
                message: "Whatis the email of the manager?",

            },
            {
                type: "input",
                name: "Office_Number",
                message: "provide detail of the managers office number",

            }
        ]).then(answers => {
            const managerInfo = new Manager(answers.new_manager, answers.managerId, answers.Email_manager, answers.Office_Number);
            roster.push(managerInfo);
            identity.push(answers.IdOfmanager);
            addTeam();
        });
    }

   
    function addTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "New_teamMate",
                message: "are there any other team mates you wish to add?",
                choices: [
                    "End application",
                    "Engineer",
                    "Intern"
                ]
            }
        ]).then(userInput => {
            switch (userInput.New_teamMate) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    generateHTML();
            }
        });
    }

  
    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "NameOfengineer",
                message: "What's the engineer's name?",

            },
            {
                type: "input",
                name: "IdOfengineer",
                message: "What's the engineer's id?",

            },
            {
                type: "input",
                name: "EmailOfengineer",
                message: "What's the engineer's email?",

            },
            {
                type: "input",
                name: "GithubOfengineer",
                message: "What's the engineer's GitHub username?",

            }
        ]).then(answers => {
            const engineer = new Engineer(answers.NameOfengineer, answers.IdOfengineer, answers.EmailOfengineer, answers.GithubOfengineer);
            roster.push(engineer);
            identity.push(answers.IdOfengineer);
            addTeam();
        });
    }

    
    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "NameOfintern",
                message: "What's the intern's name?",

            },

            {
                type: "input",
                name: "idOfintern",
                message: "What's the intern's id?",

            },

            {
                type: "input",
                name: "EmailOfintern",
                message: "What's the intern's email?",

            },

            {
                type: "input",
                name: "SchoolOfintern",
                message: "What's the intern's school?",

            }

        ]).then(answers => {
            const intern = new Intern(answers.NameOfintern, answers.idOfintern, answers.EmailOfintern, answers.SchoolOfintern);
            roster.push(intern);
            identity.push(answers.internId);
            addTeam();
        });
    }
    
    function generateHTML() {

      
        if (!fs.existsSync(direct)) {
            fs.mkdirSync(direct)
        }
        console.log("Generating Team Profile.... ");
        fs.writeFileSync(outputPath, generate(roster), "utf-8");
    }

    addManager();
}

initApp();