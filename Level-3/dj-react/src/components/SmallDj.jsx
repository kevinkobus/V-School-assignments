import React from "react";
import data from "../data"

function SmallDj(props) {

  const color = {
    backgroundColor: props.colorChange ? "#000000" : "#ffffff",
  };
  
  return (
    <div className="smallDjButton">
      <button onClick={toggleColor}>Small time DJ</button>
    </div>
  );
}

export default SmallDj;
