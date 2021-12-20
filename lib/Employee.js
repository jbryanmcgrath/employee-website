

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return 'Employee'
    }
}



// const promptUser = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: 'What is your name? (Required)',
//             validate: nameInput => {
//                 if (nameInput) {
//                     return true;
//                 } else {
//                     console.log('Please enter your name!');
//                     return false;
//                 }
//             }

//         }
//     ])
// }

module.exports = Employee