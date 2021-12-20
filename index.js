const inquirer = require("inquirer")

const userInput = () => {
    inquirer.prompt[{
        type: 'list',
        name: 'class',
        message: 'What class of employee would you like to add?',
        choices: ['Employee', 'Engineer', 'Intern',]
    }]
    if
}

// get information through inquireer
//store info in constructor
//take info to generate cards
//generate html