import React from "react";

// statelss, purely presentational, functional component
function CharacterCard(props) {
  return (
    <div>
      <img src={props.link} />
    </div>
  );
}

export default CharacterCard;
