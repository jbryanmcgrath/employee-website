


const managerCard = (managerData) => {
    return `<section>
    <div class="container p-2 m-2">
        <div class="container border" style="width: 20rem; height: 15rem;">
            <div class="row">
                <h5 class="col text-center" style="background-color: blue">${managerData.name} <br> Manager ☕</h5>
            </div>
            <div class="border p-2 m-1">
                ID : ${managerData.id}
            </div>
            <div class="border p-2 m-1">
                Email : Email : <a href = "mailto: test@testing.com">${managerData.email}</a>
            </div>
            <div class="border p-2 m-1">
                Office Number : ${managerData.officeNumber}
            </div>
        </div>
</section>`
}

// const employeeCard = () => {
//     return `<div class="container">
//     <div class="row">
//         <div class=" col-sm border" style="width: 20rem; height: 15rem;">
//             <div class="">
//                 <h5 class="text-center" style="background-color: green">Bryan <br> Employee 🧢</h5>
//             </div>
//             <div class="border p-2 m-1">
//                 ID : 2
//             </div>
//             <div class="border p-2 m-1">
//                 Email : employee@gmail.com
//             </div>
//         </div>`
// }

const internCard = (internData) => {
    return `            
    <div class="col-sm border" style="width: 20rem; height: 15rem;">
    <div class="">
        <h5 class="text-center" style="background-color: yellow">${internData.name} <br> Intern 💻</h5>
    </div>
    <div class="border p-2 m-1">
        ID : ${internData.id}
    </div>
    <div class="border p-2 m-1">
        Email : <a href = "mailto: test@testing.com">${internData.email}</a>
    </div>
    <div class="border p-2 m-1">
        School : ${internData.school}
    </div>
</div>`
};

const engineerCard = (engineerData) => {
    return `<div class="col-sm border" style="width: 20rem; height: 15rem;">
    <div class="">
        <h5 class="text-center" style="background-color: orange">${engineerData.name} <br> Engineer 🍺</h5>
    </div>
    <div class="border p-2 m-1">
        ID : ${engineerData.id}
    </div>
    <div class="border p-2 m-1">
        Email : Email : <a href = "mailto: test@testing.com">${engineerData.email}</a>
    </div>
    <div class="border p-2 m-1">
        Github : <a href='https://github.com/${engineerData.github}'>${engineerData.github}</a>
    </div>
</div>`
}

const body = (employees) => {
    let employeeCards = "";
    for (let i = 1; i < employees.length; i++) {
        if (employees[i].getRole() === "Engineer") {
            employeeCards = employeeCards + engineerCard(employees[i])
        } else {
            employeeCards = employeeCards + internCard(employees[i])
        }
    }
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <title>Employee Website Generator!</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="description" content="" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="style.css" />
    <link rel="icon" href="img/favicon.png">
</head>

<body>
    <nav class="navbar" style="background-color: red;">
        <a class="navbar-brand">
            <h1 id="titler">My Team</h1>
        </a>
    </nav>
    <section>
        ${managerCard(employees[0])}
    </section>
    <br>
    <div class="container">
        <div class="row">
            ${employeeCards}
        </div>
        </div>
    
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
            crossorigin="anonymous"></script>
    </body>
    
    </html>
    `
}

module.exports = body