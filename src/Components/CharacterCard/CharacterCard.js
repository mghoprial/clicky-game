import React from "react";
import "../CharacterCard/style.css";

// statelss, purely presentational, functional component
function CharacterCard(props) {
  console.log("PROPS", props);
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt={props.name}
          src={props.image}
          onClick={() => props.handleClick(props.id)}
        />
      </div>
    </div>
  );
}

export default CharacterCard;
