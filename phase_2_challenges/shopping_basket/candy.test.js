const Candy = require("./candy");

describe("test candy class", () => {
  const candy = new Candy("Mars", 4.99);
  it("get name of candy", () => {
    expect(candy.getName()).toBe("Mars");
  });
  it("get price of candy", () => {
    expect(candy.getPrice()).toBe(4.99);
  });
});
