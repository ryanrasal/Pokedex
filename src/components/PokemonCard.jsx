import React, { useState } from "react";
import PropTypes from "prop-types";

const PokemonCard = ({pokemonList}) => {
    PokemonCard.propTypes = {
        pokemonList: PropTypes.shape({
          name: PropTypes.string.isRequired,
          imgSrc: PropTypes.string,
        }).isRequired,
      }
      
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
