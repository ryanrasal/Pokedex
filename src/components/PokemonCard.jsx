import React, { useState } from "react";
import PropTypes from "prop-types";

const PokemonCard = ({ pokemonList }) => {
  PokemonCard.propTypes = {
    pokemonList: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
    }).isRequired,
  };

  // UseState pour indexer pokemonList
  const [pokemonIndex, setPokemonIndex] = useState(0);
// Bouton suivant 
  const handleNext = () => {
    pokemonIndex < pokemonList.length - 1 ?
    setPokemonIndex(pokemonIndex + 1) : false
  };
// Bouton Précédent
  const handlePrevious = () => {
    pokemonIndex > 0 ?
    setPokemonIndex(pokemonIndex - 1) : false
  };

  return (
    <div>
      <figure>
        <figcaption>
          <p>{pokemonList[pokemonIndex].name}</p>
        </figcaption>
        <img src={pokemonList[pokemonIndex].imgSrc} alt={pokemonList[pokemonIndex].name} />
      </figure>
      <button onClick={() => handlePrevious()}>précédent</button>
      <button onClick={() => handleNext()}>suivant</button>
    </div>
  );
};

export default PokemonCard;
