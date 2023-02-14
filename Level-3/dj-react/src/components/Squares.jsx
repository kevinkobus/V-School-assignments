import React from "react";
import data from "../data";
import SmallDj from "./SmallDj";

function Squares() {
  const [squares, setSquares] = React.useState(data);

  const squareElements = squares.map((square) => (
    <div className="boxes" key={square.id} style={color}>
      box
    </div>
  ));
  
  function toggleColor() {
    setSquares((prevSquares) => ({
      ...prevSquares,
      on: !prevSquares.on,
    }));
  }

  return (
    <div className="boxes-container">
      {squareElements}
      <SmallDj />
    </div>
  );
}

export default Squares;
