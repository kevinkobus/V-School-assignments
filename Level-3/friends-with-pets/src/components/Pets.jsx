import React from "react";

function Pets(props) {
  // console.log(props)
  return (
    <div className="pet-info">
      <h3 id="pet-header">Pet</h3>
      <ul className="pet-list">
        <li>Name: {props.name}</li>
        <li>Breed: {props.breed}</li>
      </ul>
    </div>
  );
}

export default Pets;
