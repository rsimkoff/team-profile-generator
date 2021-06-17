// creates intern class using a constructer to assign different objects or data components to each team members profile.
// appends a name, id, school etc.
// requires command line scripting from employee.js 

const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school)
    {
        super(name, id, email);
        this.school = school;
    }
    getSchool()
    {
        return this.school;
    }
    getRole()
    {
        return "Intern";
    }
    getRoleHtml()
    {
        return `<li>School: ${this.getSchool()}</li>`
    }
}

module.exports = Intern;