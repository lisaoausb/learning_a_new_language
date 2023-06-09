const Pokedex = require("./pokédex");

describe("test the pokedex class", () => {
  it("test the classes constructor", () => {
    const pokedex = new Pokedex();
    expect(pokedex.pokemons).toEqual([]);
  });
  it("catch pikachu adds pikachu to the bin", () => {
    const pokedex = new Pokedex();
    pokedex.catch("pikachu").then(
      (
        _pikachu //.catch returns a promise and if I don't resolve it (calling .then on it), the test does not know when the code is done and it can assert. so I have to call then on it and then assert within then, as otherwise the promise remains unresolved.
      ) => expect(pokedex.pokemons[0]["name"]).toEqual("pikachu")
      // I run the expect function inside then.
    );
  });

  it("catch jigglypuff and add to bin", () => {
    const pokedex = new Pokedex();
    pokedex
      .catch("pikachu")
      .then((_pikachu) =>
        pokedex
          .catch("jigglypuff")
          .then((_pikachu) =>
            expect(pokedex.all()).toEqual(["pikachu", "jigglypuff"])
          )
      );
  });
});
