const fizzBuzz = require("./fizzbuzz");

describe("fizzBuzz", () => {
  it("play with a 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });
  it("play with a 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });
  it("play with a 8", () => {
    expect(fizzBuzz(8)).toBe(8);
  });
  it("play with a 15", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  it("play with a 18", () => {
    expect(fizzBuzz(18)).toBe("Fizz");
  });
  it("play with a 20", () => {
    expect(fizzBuzz(20)).toBe("Buzz");
  });
});
