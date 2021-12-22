const inquirer = require("inquirer")
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')


const initiateApp = managerData => {
    inquirer.prompt[{
        type: 'input',
        name: 'manager',
        message: 'Start off by listing the manager. What is the managers name (Reguired)',
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
        message: 'Please enter the employee office number (Required)'
    }]
}
initiateApp()
    // .then(console.log(managerData))
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