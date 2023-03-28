import PropTypes from "prop-types";

const PokemonCard = ({ pokemonList, pokemonIndex }) => {
  PokemonCard.propTypes = {
    pokemonList: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
    }).isRequired,
  };

  return (
    <div>
      <figure>
        <figcaption>
          <p>{pokemonList[pokemonIndex].name}</p>
        </figcaption>
        <img
          src={pokemonList[pokemonIndex].imgSrc}
          alt={pokemonList[pokemonIndex].name}
        />
      </figure>
    </div>
  );
};

export default PokemonCard;
