// takes in manager script and declares it
const Manager = require("../lib/Manager");
// sets a value for office number to test
test("Set Office Number with setOffice()", () => {
    const testValue = 100;
    const emp = new Manager("Ryan", 1, "rsimkoff@gmail.com", testValue);
    expect(emp.officeNumber).toBe(testValue);
});
// tests for manager role
test("getRole() catching the right class", () => {
    const testValue = "Manager";
    const emp = new Manager("Ryan", 1, "rsimkoff@gmail.com");
    expect(emp.getRole()).toBe(testValue);
});
// tests for correct office number
test("Get correct number with getOffice()", () => {
    const testValue = 100;
    const emp = new Manager("Ryan", 1, "rsimkoff@gmail.com", testValue);
    expect(emp.getOfficeNumber()).toBe(testValue);
});