// imports manager script
const Intern = require("../lib/Intern");
// tests for correct emplpyee school
test("Set School with setSchool()", () => {
    const testValue = "Georgia Tech Bootcamp";
    const emp = new Intern("Ryan", 1, "rsimkoff@gmail.com", testValue);
    expect(emp.school).toBe(testValue);
});
// tests for correct intern role
test("getRole() catching the right class", () => {
    const testValue = "Intern";
    const emp = new Intern("Ryan", 1, "rsimkoff@gmail.com", "Georgia Tech Bootcamp");
    expect(emp.getRole()).toBe(testValue);
});
// tests for correct school
test("Get School with getSchool()", () => {
    const testValue = "Georgia Tech Bootcamp";
    const emp = new Intern("Ryan", 1, "rsimkoff@gmail.com", testValue);
    expect(emp.getSchool()).toBe(testValue);
});