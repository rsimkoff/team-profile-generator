// creates engineer class using a constructer to assign different objects or data components to each team members profile.
// appends a name, email, github etc.
// requires command line scripting from employee.js 
const Employee = require('./Employee');

class Engineer extends Employee {   
    constructor(name, id, email, github)
    {
        super(name, id, email);
        this.github = github;
    }
    getGithub()
    {
        return this.github;
    }
    getRole()
    {
        return "Engineer"
    }
    getRoleHtml()
    {
        return `<li>Github: <a href="https://github.com/${this.getGithub()}">${this.getGithub()}</a></li>`
    }
}

module.exports = Engineer;