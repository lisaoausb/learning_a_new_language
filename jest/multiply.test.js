// file: add.test.js

const multiply = require("./multiply");

describe("multiply", () => {
  it("multiply 3 and 3", () => {
    expect(multiply(3, 3)).toBe(9);
  });

  it("multiply 12 * 12", () => {
    expect(multiply(12, 12)).toBe(144);
  });
});
