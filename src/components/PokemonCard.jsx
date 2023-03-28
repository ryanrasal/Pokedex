import React, { useState } from "react";

const PokemonCard = () => {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

  const [pokemon, setPokemon] = useState(pokemonList[1]);

  return (
    <div>
      <p>{pokemon.name}</p>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
    </div>
  );
};

export default PokemonCard;
