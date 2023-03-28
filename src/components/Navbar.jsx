import React from "react";

const Navbar = ({ handlePrevious, handleNext }) => {
  return (
    <div>
      <button onClick={() => handlePrevious()}>précédent</button>
      <button onClick={() => handleNext()}>suivant</button>
    </div>
  );
};

export default Navbar;
