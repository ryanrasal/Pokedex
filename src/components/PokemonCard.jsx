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

  const [pokemon, setPokemon] = useState(pokemonList[0]);

  return (
    <div>
      <figure>
        <figcaption>
          <p>{pokemon.name}</p>
        </figcaption>
        {pokemon.imgSrc ? (
          <img src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (
          <p>???</p>
        )}
      </figure>
    </div>
  );
};

export default PokemonCard;
