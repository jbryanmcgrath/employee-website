const inquirer = require("inquirer")
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const employees = []
const generateHTML = require('./src/page-template')
const fs = require('fs')



const managerQuestions = () => {
    inquirer.prompt([{
        type: 'input',
        name: 'manager',
        message: 'Start off by listing the manager. What is the managers name (Required)',
        validate: managerInput => {
            if (managerInput) {
                return true;
            } else {
                console.log('Please enter the name of the Manager.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the Employee ID? (Required)',
        validate: idInput => {
            if (idInput) {
                return true
            } else {
                console.log('Please enter the Employee ID')
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the employee email? (Required) ',
        validate: emailInput => {
            if (emailInput) {
                return true
            } else {
                console.log('Please enter a valid email address.')
            }
        }
    },
    {
        type: 'input',
        name: 'office',
        message: 'Please enter the manager office number (Required)'
    }])
        .then((managerData) => {
            const newManager = new Manager(managerData.manager, managerData.id, managerData.email, managerData.office);
            employees.push(newManager)
            addEmployee()
        })
}


const employeeClassQuestions = () => {
    return inquirer.prompt([{
        type: 'input',
        name: 'employee',
        message: "What is the emplopyee's name (Reguired)",
        validate: employeeInput => {
            if (employeeInput) {
                return true;
            } else {
                console.log('Please enter the name of the employee.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the Employee ID? (Reguired)',
        validate: idInput => {
            if (idInput) {
                return true
            } else {
                console.log('Please enter the Employee ID')
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the employee email? (Required) ',
        validate: emailInput => {
            if (emailInput) {
                return true
            } else {
                console.log('Please enter a valid email address.')
            }
        }
    }])

};


const internClassQuestions = (answers) => {
    inquirer.prompt([{
        type: 'input',
        name: 'school',
        message: 'What school did you attend? (Required)',
        validate: internInput => {
            if (internInput) {
                return true
            } else {
                console.log('Please enter a valid school')
            }
        }
    }])
        .then((internData) => {
            const newIntern = new Intern(answers.employee, answers.id, answers.email, internData.school);
            employees.push(newIntern);
            addEmployee();
        })
}

const engineerClassQuestions = (answers) => {
    inquirer.prompt([{
        type: 'input',
        name: 'github',
        message: 'What is your Github profile name? (Required)',
        validate: engineerInput => {
            if (engineerInput) {
                return true
            } else {
                console.log('Please enter a Github account')
            }
        }
    }])
        .then((engineerData) => {
            const newEngineer = new Engineer(answers.employee, answers.id, answers.email, engineerData.github);
            console.log(newEngineer.getRole())
            employees.push(newEngineer)
            addEmployee();
        })
}


const addEmployee = () => {
    inquirer.prompt([{
        type: 'list',
        name: 'addEmployee',
        message: 'Do you have any positions to add?',
        choices: ['Employee', 'Engineer', 'Intern', 'No More Roles to Add']
    }])
        .then(selection => {
            switch (selection.addEmployee) {
                case 'Intern':
                    employeeClassQuestions().then((answers) => {
                        internClassQuestions(answers)
                    })
                    break;

                case 'Engineer':
                    employeeClassQuestions().then((answers) => {
                        engineerClassQuestions(answers);
                    });
                    break;
                case 'No More Roles to Add':
                    console.log(employees)
                    // study fs
                    fs.writeFileSync('./dist/index.html', generateHTML(employees));
                    console.log('Thanks. Come Again!');
                    break;
            }
        })
}

managerQuestions();


// get information through inquireer
//store info in constructor
//take info to generate cards
//generate html