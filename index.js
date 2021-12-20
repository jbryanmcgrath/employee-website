const inquirer = require("inquirer")
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const userInput = () => {
    inquirer.prompt[{
        type: 'list',
        name: 'class',
        message: 'What class of employee would you like to add?',
        choices: ['Employee', 'Engineer', 'Intern',]
    }]
}

// get information through inquireer
//store info in constructor
//take info to generate cards
//generate html