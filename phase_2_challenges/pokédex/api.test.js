const fetchPokemonII = require("./api");

describe("Testing Pokédex", () => {
  it("can get pikachu's data – using DONE", (done) => {
    fetchPokemonII("pikachu").then((pokemon) => {
      expect(pokemon["name"]).toEqual("pikachu");
      done();
    });
  });
});

describe("Pokedex", () => {
  it("can get pikachu's data – testing with the returned promise, i.e., no DONE", () => {
    fetchPokemonII("pikachu").then((pokemon) => {
      expect(pokemon["name"]).toEqual("pikachu");
    });
  });
});
