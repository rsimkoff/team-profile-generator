// creates manager class using a constructer to assign different objects or data components to each team members profile.
// appends a name, id, email etc.
// requires command line scripting from employee.js 

const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber)
    {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber()
    {
        return this.officeNumber;
    }
    getRole()
    {
        return "Manager";
    }
    getRoleHtml()
    {
        return `<li>Office Number: ${this.getOfficeNumber()}</li>`
    }
}

module.exports = Manager;