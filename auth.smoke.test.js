const { login } = require("./auth");

test("Smoke Test - Valid login", () => {
    expect(login("admin", "123")).toBe(true);
});
