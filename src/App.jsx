import React, { useEffect, useState } from "react";
import "./App.css";
import MyTitle from "./components/MyTitle";
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

  useEffect(() => {
    alert("hello pokemon trainer :");
  }, []);

  // UseState pour indexer pokemonList
  const [pokemonIndex, setPokemonIndex] = useState(0);
  // Bouton suivant
  const handleNext = () => {
    pokemonIndex < pokemonList.length - 1
      ? setPokemonIndex(pokemonIndex + 1)
      : false;
  };
  // Bouton Précédent
  const handlePrevious = () => {
    pokemonIndex > 0 ? setPokemonIndex(pokemonIndex - 1) : false;
  };

  useEffect(() => {
    pokemonIndex === 3 ? alert("pika pikachu !!!") : null;
  }, [pokemonIndex]);

  return (
    <div>
      <MyTitle />
      <PokemonCard pokemonList={pokemonList[pokemonIndex]} />;
      <Navbar handleNext={handleNext} handlePrevious={handlePrevious}  />
    </div>
  );
}

export default App;
