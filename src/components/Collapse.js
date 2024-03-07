import React, { useState } from "react";

const Collapse = (props) => {
  // // Variable qui permet de garder en memoir l'etat d'ouverture de la zone de contenu
  const [open, setOpen] = useState(false);

  // réglage de l'état opposé de la bascule de l'affichage
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="collapse_container">
      {/* au clic, afficher le contenu */}
      <div className="button_container" onClick={toggle}>
        <div className="collapse_button">
          {" "}
          <p>{props.label}</p>{" "}
        </div>
        {/* si le Collaps est ouvert, affichez la fleche au dessus*/}
        {open ? (
          <i className="fa-solid fa-chevron-up"></i>
        ) : (
          // Sinon on affiche la fleche vers le bas
          <i className="fa-solid fa-chevron-down"></i>
        )}
      </div>
      {/* si le Collaps est ouvert, On affiche le contenu (Open contiens la valeur vrai) */}
      {open && <div className="collapse_content"> {props.content} </div>}
    </div>
  );
};

export default Collapse;
