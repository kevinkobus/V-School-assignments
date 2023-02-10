import React from "react";

function Dice(props) {
  return (
    <section className="dice">
      <div>{props.number}</div>
    </section>
  );
}

export default Dice;
