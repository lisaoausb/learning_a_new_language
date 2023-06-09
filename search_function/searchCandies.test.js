const searchCandies = require("./searchCandies");

describe("searchCandies", () => {
  it("search for Ma under 10", () => {
    expect(searchCandies("Ma", 10)).toEqual(["Mars", "Maltesers"]);
  });
  it("search for Ma under 2", () => {
    expect(searchCandies("Ma", 2)).toEqual(["Mars"]);
  });
  it("search for S under 10", () => {
    expect(searchCandies("S", 10)).toEqual([
      "Skitties",
      "Skittles",
      "Starburst",
    ]);
  });
  it("search for S under 4", () => {
    expect(searchCandies("S", 4)).toEqual(["Skitties", "Skittles"]);
  });
  it("search for ma under 10", () => {
    expect(searchCandies("ma", 10)).toEqual(["Mars", "Maltesers"]);
  });
});
