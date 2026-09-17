const { login } = require("./auth");

test("Regression Test - Wrong password", () => {
    expect(login("admin", "wrong")).toBe(false);
});

test("Regression Test - Empty username", () => {
    expect(login("", "123")).toBe(false);
});

test("Regression Test - Empty password", () => {
    expect(login("admin", "")).toBe(false);
});

test("Regression Test - Special characters in password", () => {
    expect(login("admin", "@#$%")).toBe(false);
});

test("Regression Test - Locked account", () => {
    expect(login("locked", "123")).toBe(false);
});
