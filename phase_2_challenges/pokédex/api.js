// First step of challenge – works fine
function fetchPokemonI(pokemonName) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

// module.exports = fetchPokemonI;

// Second step of challenge
function fetchPokemonII(pokemonName) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
      return {
        name: data["name"],
        id: data["id"],
        height: data["height"],
        weight: data["weight"],
        types: data["types"].map((type) => type["type"]["name"]),
        // let pokemonData = {};
        // pokemonData["name"] = data["name"];
        // pokemonData["id"] = data["id"];
        // pokemonData["height"] = data["height"];
        // pokemonData["weight"] = data["weight"];
        // pokemonData["types"] = data["types"].map((type) => type["type"]["name"]);
        // return pokemonData;
      };
    });
}

// const charizard = fetchPokemonII("charizard").then((pokemon) =>
//   console.log(pokemon)
// );
// const pikachu = fetchPokemonII("pikachu").then((pokemon) =>
//   console.log(pokemon)
// );

module.exports = fetchPokemonII;

// .then((data) => {
//   let pokemonData = {};
//   pokemonData["name"] = data["name"];
//   pokemonData["id"] = data["id"];
//   pokemonData["height"] = data["height"];
//   pokemonData["weight"] = data["weight"];
//   console.log(pokemonData);
//   return pokemonData;
// });

// FAILED ATTEMPTS
//   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//     .then((response) => response.json())
//     .then((data) => {
//       let pokemonData = {};
//       pokemonData["name"] = data["name"];
//       pokemonData["id"] = data["id"];
//       pokemonData["height"] = data["height"];
//       pokemonData["weight"] = data["weight"];
//       console.log(pokemonData);
//       return pokemonData;
//     });
// }

// FAILED ATTEMPTS
//   const data = response.json();
//   console.log(data);
//   let pokemon = {};
//   pokemon["name"] = data["name"];
//   pokemon["id"] = data["id"];
//   pokemon["height"] = data["height"];
//   pokemon["weight"] = data["weight"];
//   console.log(pokemon);
//   return pokemon;
// });

// CALL IN CONSOLE
// fetchPokemonII("pikachu").then((pokemon) => console.log(pokemon));
