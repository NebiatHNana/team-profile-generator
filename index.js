const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
let html = `<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <script src="https://kit.fontawesome.com/003f026d41.js" crossorigin="anonymous"></script>
   <link rel="stylesheet" href="style.css">
   <title>My Team</title>
</head>
<body>
   <header>
      <h1>My Team</h1>
   </header>
   <main>`;

function startPrompts() {
  console.log("Welcome Manager. Please provide some information.");
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is your name? (Required)",
        validate: (managerNameInput) => {
          if (managerNameInput) {
            return true;
          } else {
            console.log("Your name is required!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "managerId",
        message: "What is your employee id? (Required)",
        validate: (managerIdInput) => {
          if (managerIdInput) {
            return true;
          } else {
            console.log("Your employee id is required!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is your email address? (Required)",
        validate: (managerEmailInput) => {
          if (managerEmailInput) {
            return true;
          } else {
            console.log("Your email is required!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is your office number? (Required)",
        validate: (managerOfficeNumberInput) => {
          if (managerOfficeNumberInput) {
            return true;
          } else {
            console.log("Your office number is required!");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOfficeNumber
      );
      let managerHtml = `
      <article class="card">
               <div class="employee-heading">
                  <h2 class="name">
                  ${manager.getName()}
                  </h2>
                  <h3 class="role">
                      <i class="fa-solid fa-mug-hot"></i> Manager
                  </h3>
               </div>
               <div class="employee-content-container">
                  <div class="employee-content id">
                     ID: ${manager.getId()}
                  </div>
                  <div class="employee-content email">
                     Email: <a href = "mailto:${manager.getEmail()}">${manager.getEmail()}</a>
                  </div>
                  <div class="employee-content office-number">
                     Office number: ${manager.getOfficeNumber()}
                  </div>
               </div>
            </article>
      `;
      html += managerHtml;
      promptEmployeeType();
    });
}

function promptEmployeeType() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to add an intern or an engineer to the team?",
        name: "employeeType",
        choices: ["Intern", "Engineer", "None"],
      },
    ])
    .then((answers) => {
      promptTeamMember(answers);
    });
}

function promptTeamMember(answers) {
  if (answers.employeeType === "Intern") {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is your intern's name? (Required)",
          validate: (internNameInput) => {
            if (internNameInput) {
              return true;
            } else {
              console.log("Your interns name is required!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "internId",
          message: "What is your intern's employee id? (Required)",
          validate: (internIdInput) => {
            if (internIdInput) {
              return true;
            } else {
              console.log("Your interns employee id is required!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is your intern's email address? (Required)",
          validate: (internEmailInput) => {
            if (internEmailInput) {
              return true;
            } else {
              console.log("Your interns email is required!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "internSchool",
          message:
            "What educational institution does your intern attend? (Required)",
          validate: (internSchoolInput) => {
            if (internSchoolInput) {
              return true;
            } else {
              console.log("Your interns school is required!");
              return false;
            }
          },
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        let internHtml = `
        <article class="card">
        <div class="employee-heading">
           <h2 class="name">
           ${intern.getName()}
           </h2>
           <h3 class="role">
            <i class="fa-solid fa-user-graduate"></i> Intern
           </h3>
        </div>
        <div class="employee-content-container">
           <div class="employee-content id">
              ID: ${intern.getId()}
           </div>
           <div class="employee-content email">
              Email: <a href = "mailto:${intern.getEmail()}">${intern.getEmail()}</a>
           </div>
           <div class="employee-content school">
              School: ${intern.getSchool()}
           </div>
        </div>
     </article>
        `;
        html += internHtml;
        promptEmployeeType();
      });
  }

  if (answers.employeeType === "Engineer") {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is your engineer's name? (Required)",
          validate: (engineerNameInput) => {
            if (engineerNameInput) {
              return true;
            } else {
              console.log("Your engineers name is required!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is your engineer's employee id? (Required)",
          validate: (engineerIdInput) => {
            if (engineerIdInput) {
              return true;
            } else {
              console.log("Your engineers employee id is required!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is your engineer's email address? (Required)",
          validate: (engineerEmailInput) => {
            if (engineerEmailInput) {
              return true;
            } else {
              console.log("Your engineers email is required!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "engineerGitHub",
          message: "What is your engineer's GitHub account? (Required)",
          validate: (engineerGitHubInput) => {
            if (engineerGitHubInput) {
              return true;
            } else {
              console.log(
                "You need to enter the GitHub account associated with your engineer!"
              );
              return false;
            }
          },
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGitHub
        );
        let engineerHtml = `
        <article class="card">
        <div class="employee-heading">
           <h2 class="name">
           ${engineer.getName()}
           </h2>
           <h3 class="role">
            <i class="fa-solid fa-glasses"></i> Engineer
           </h3>
        </div>
        <div class="employee-content-container">
           <div class="employee-content id">
              ID: ${engineer.getId()}
           </div>
           <div class="employee-content email">
              Email: <a href = "mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
           </div>
           <div class="employee-content github">
              GitHub: <a href = "https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a>
           </div>
        </div>
     </article>
        `;
        html += engineerHtml;
        promptEmployeeType();
      });
  } else {
    console.log(
      "Webpage generated! Please see the index.html file in the dist folder to review your team."
    );
    html += `</main>
    </body>
    
    </html>
    `
    fs.writeFile("./dist/index.html", html, (err) => {
      if (err) throw err;
    });
    fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
      if (err) throw err;
    });
  }
}

startPrompts();