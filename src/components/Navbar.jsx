import React from "react";

const Navbar = ({ pokemonList, handlePokemon }) => {
  return (
    <div>
      {pokemonList.map((pokemon, index) => 
				<button onClick={() => handlePokemon(pokemon.name)} key={index}>{pokemon.name}</button>
			)}
    </div>
  );
};

export default Navbar;
