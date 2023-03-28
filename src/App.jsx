import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PokemonCard from "./components/PokemonCard";

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  // UseState pour indexer pokemonList
  const [pokemonIndex, setPokemonIndex] = useState(0);
  // Bouton 
  function handlePokemon(pokemon_name) {
    setPokemonIndex(pokemonList.findIndex(pokemon => pokemon.name === pokemon_name));
  }

  useEffect(() => {
    pokemonIndex === 3 ? alert("pika pikachu !!!") : null;
  }, [pokemonIndex]);


  return (
    <div>
      <PokemonCard pokemonList={pokemonList} pokemonIndex={pokemonIndex} />;
      <Navbar
        pokemonList={pokemonList}
        handlePokemon={handlePokemon}
      />
    </div>
  );
}

export default App;
