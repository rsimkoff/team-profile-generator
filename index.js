const fs = require('fs');
// imports inquirer package to import information from the command line
const inquirer = require('inquirer');
// creats htmlfile path for when data is ready to send
const createHtmlFile = './dist/Profilepage.html'
// creates classes for each group of employees
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let teamMembers = [];
//command prompt inquiries for manager entries
inquirer
  .prompt([
    //manager questions here
      {
        name:"managerName",
        type:"input",
        message:"Enter team manager's name",
      },
      {
        name:"managerID",
        type:"input",
        message:"Enter team manager's employee ID",
      },
      {
        name:"managerEmail",
        type:"input",
        message:"Enter team manager's email",
      },
      {
        name:"managerOfficeNumber",
        type:"input",
        message:"Enter team manager's office number",
      },
      {
          name:"additionalTeamMember",
          type:"list",
          message: "Select team members to add",
          choices:["Engineer", "Intern"]
      },
  ])
  .then(answers => {
    //create manager
    let manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);
    //add manager to team members object
    teamMembers.push(manager);
    //evaluate additional team members options
    evaluateAdditionalTeamMemberResult(answers.additionalTeamMember);
  })
  .catch(error => {
      //boiler plate error handling from inquire
    if(error.isTtyError) {
      // Prompt issue in local environment
    } else {
      // Still an issue in the code
    }
  });


function addEngineer()
{
inquirer
.prompt([
    //Engineer questions below
    {
        name:"engineerName",
        type:"input",
        message:"Enter engineer's name",
    },
    {
        name:"engineerID",
        type:"input",
        message:"Enter engineer's employee ID",
    },
    {
        name:"engineerEmail",
        type:"input",
        message:"Enter engineer's email",
    },
    {
        name:"engineerGithub",
        type:"input",
        message:"Enter engineer's github username",
    },
    {
        name:"additionalTeamMember",
        type:"list",
        message: "Select team members to add",
        choices:["Engineer", "Intern", "Exit"]
    },
])
.then(answers => {
    //create new Engineer
    let engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
    //add to team array
    teamMembers.push(engineer);
    //evaluate additional team member
    evaluateAdditionalTeamMemberResult(answers.additionalTeamMember);
})
.catch(error => {
    //boiler plate error handling from inquire
  if(error.isTtyError) {
    // Prompt issue in local environment
  } else {
    // Still an issue in the code
  }
});
}

//call this as many times as interns need to be added
function addIntern()
{
inquirer
.prompt([
    //Intern questions below
    {
        name:"internName",
        type:"input",
        message:"Enter intern's name",
    },
    {
        name:"internID",
        type:"input",
        message:"Enter intern's employee ID",
    },
    {
        name:"internEmail",
        type:"input",
        message:"Enter intern's email",
    },
    {
        name:"internSchool",
        type:"input",
        message:"Enter intern's school",
    },
    {
        name:"additionalTeamMember",
        type:"list",
        message: "Select team members to add",
        choices:["Engineer", "Intern", "Exit"]
    },
])
.then(answers => {
    //create new intern
    let intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
    //add to global array
    teamMembers.push(intern);
    //evaluate additional team member
    evaluateAdditionalTeamMemberResult(answers.additionalTeamMember);

})
.catch(error => {
    //boiler plate error handling from inquire
  if(error.isTtyError) {
    // Prompt issue in local environment
  } else {
    // Still an issue in the code
  }
});
}

function evaluateAdditionalTeamMemberResult(result)
{
    if(result === "Engineer")
    {
        //call add engineer prompts
        addEngineer();
    }else if(result === "Intern")
    {
        //call add intern prompts
        addIntern();
    }else
    {
        //finish with asking prompts and generate html
        generateHTML();
    }
}
// generates boilerplate and basic html doc structure
function generateInitialHTML()
{
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="./teamProfile.css">
    </head>
    <body>
        <div class="teamNavBar">
            <h1 class="navBarTitle">My Team</h2>
        </div>
        <div class="cardBody">`
}
// adds html for each card section for different team menber groups
function generateTeamMemberHtml(teamMember)
{
    return `        <div class="teamMemberCard">
    <div class="teamMemberTitle">
        <h3>${teamMember.getName()} - ${teamMember.getRole()}</h3>
    </div>
    <div class="teamMemberBody">
        <ul>
            <li>ID:${teamMember.getId()}</li>
            <li>Email: <a href="mailto:${teamMember.getEmail()}">${teamMember.getEmail()}</a></li>
            ${teamMember.getRoleHtml()}
        </ul>
    </div>
</div>`;
}

function generateFinalHtml()
{
    return `    </div>
    </body>
    </html>`;
}

//loop through team members array and generate html
function generateHTML()
{
    // creates new html file in dist folder to host homepage
    fs.writeFileSync(createHtmlFile,"");
    //setup string to hold generated html
    let htmlData = generateInitialHTML();
    //loops through team members
    for(var a in teamMembers)
    {
        htmlData += generateTeamMemberHtml(teamMembers[a]);
    }
    //sends html file with data
    htmlData += generateFinalHtml();
    //write data to file
    fs.writeFileSync(createHtmlFile,htmlData);
}