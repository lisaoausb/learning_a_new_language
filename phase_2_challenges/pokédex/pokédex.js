const fetchPokemon = require("./api");

class Pokedex {
  constructor() {
    this.pokemons = [];
  }

  catch(pokemon) {
    const pokemonPromise = fetchPokemon(pokemon).then((pokemon) => {
      this.pokemons.push(pokemon); // in here I resolve the promise and push its data to my this.pokemons array, but the variable is still a promise, then always *returns* a promise
    });
    return pokemonPromise; // this is still a promise!
  }

  all() {
    return this.pokemons.map((pokemon) => pokemon["name"]);
  }
}

module.exports = Pokedex;
