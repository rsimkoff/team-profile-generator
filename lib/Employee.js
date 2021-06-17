// creates employee class using a constructer to assign different objects or data components to each team members profile.
// appends a name, id, email etc.
class Employee {
    constructor(name, id, email)
    {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName()
    {
        return this.name;
    }
    getId()
    {
        return this.id;
    }
    getEmail()
    {
        return this.email;
    }
    getRole()
    {
        return "Employee";
    }
}

module.exports = Employee;