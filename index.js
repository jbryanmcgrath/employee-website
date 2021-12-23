const inquirer = require("inquirer")
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')


const initiateApp = () => {
    return inquirer.prompt([{
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
    },
    {
        type: 'input',
        name: 'office',
        message: 'Please enter the manager number (Required)'
    }])
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


const internClassQuestions = () => {
    return inquirer.prompt([{
        type: 'input',
        name: 'intern',
        message: 'What school did you attend? (Required)',
        validate: internInput => {
            if (internInput) {
                return true
            } else {
                console.log('Please enter a valid school')
            }
        }
    }])
}



const addEmployee = () => {
    return inquirer.prompt([{
        type: 'list',
        name: 'addEmployee',
        message: 'Do you have any positions to add?',
        choices: ['Employee', 'Engineer', 'Intern', 'No More Roles to Add']
    }
    ])
        .then((answer) => {
            if (answer.addEmployee === 'No More Roles to Add') {
                return console.log('Thank you for using this app to generate your employee webpage. Have a great day');
            }
            if (answer.addEmployee === 'Employee') {
                employeeClassQuestions();
            }
            if (answer.addEmployee === 'Intern') {
                employeeClassQuestions()
            }
            return;
        })
}

addEmployee()
// const userInput = () => {
//     inquirer.prompt[{
//         type: 'list',
//         name: 'class',
//         message: 'What class of employee would you like to add?',
//         choices: ['Employee', 'Engineer', 'Intern',]
//     }]
// }

// get information through inquireer
//store info in constructor
//take info to generate cards
//generate html