import React, { useState } from "react";

const PokemonCard = ({pokemonList}) => {
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
