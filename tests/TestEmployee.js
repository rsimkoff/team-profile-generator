// imports employee script and tests using Jest
const Employee = require("../lib/Employee");
// expects employee object
test("New Employee created", ()=> {
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");
});
// sets a name to be tested
test("Set name for test argument", () => {
    const name = "Ryan";
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
});
// sets an ID to be tested
test("Set ID for test argument", () => {
    const testValue = 100;
    const emp = new Employee("Ryan", testValue);
    expect(emp.id).toBe(testValue);
});
// sets email test
test("Set email for test argument", () => {
    const testValue = "rsimkoff@gmail.com";
    const emp = new Employee("Ryan", 1, testValue);
    expect(emp.email).toBe(testValue);
});
// test gets employee name
test("Get name with getName()", () => {
    const testValue = "Ryan";
    const emp = new Employee(testValue);
    expect(emp.getName()).toBe(testValue);
});
// test gets employee ID
test("Get ID with getId()", () => {
    const testValue = 100;
    const emp = new Employee("Ryan", testValue);
    expect(emp.getId()).toBe(testValue);
});
// test gets employee email
test("Get Email with getEmail()", () => {
    const testValue = "rsimkoff@gmail.com";
    const emp = new Employee("Ryan", 1, testValue);
    expect(emp.getEmail()).toBe(testValue);
});
// test gets employee role
test("getRole() catching the right class", () => {
    const testValue = "Employee";
    const emp = new Employee("Ryan", 1, "rsimkoff@gmail.com");
    expect(emp.getRole()).toBe(testValue);
});