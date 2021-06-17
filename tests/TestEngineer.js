// imports engineer script
const Engineer = require("../lib/Engineer");

test("Set GitHub Account name using engineer constructor", () => {
    const testValue = "user-01";
    const emp = new Engineer("Ryan", 1, "rsimkoff@gmail.com", testValue);
    expect(emp.github).toBe(testValue);
});

// tests for correct engineers role
test("getRole() functions correctly", () => {
    const testValue = "Engineer";
    const emp = new Engineer("Ryan", 1, "rsimkoff@gmail.com", "user-01");
    expect(emp.getRole()).toBe(testValue);
});
// tests for engineer via github listing
test("Get GitHub UN via getGitHub()", () => {
    const testValue = "user-01";
    const emp = new Engineer("Ryan", 1, "rsimkoff@gmail.com", testValue);
    expect(emp.getGitHub()).toBe(testValue);
});