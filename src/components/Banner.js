import React from "react";
import { useLocation } from "react-router-dom";

const Banner = () => {
  // Emplacement de stockage pour différencier les composants className en fonction de l'emplacement de la page
  const path = useLocation().pathname;
  const location = path.length;

  return (
    // Ddifférencier les composants className en fonction de l'emplacement de la page
    <div className={"banner_container" + location}>
      <p>
        Chez vous, <span>partout et ailleurs</span>
      </p>
    </div>
  );
};

export default Banner;
