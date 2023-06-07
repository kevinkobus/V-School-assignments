import React, { useState } from "react";

function BountyCard(props) {
  // console.log(props)

  return (
    <div className="card-container">
      <div className="pic-name">
        <img src={props.headShot} alt="image" className="head-shot" />
        <h3>First Name: {props.firstName}</h3>
        <h3>Last Name: {props.lastName}</h3>
      </div>
      <div className="info">
        <h4>Status: {props.status}</h4>
        <h4>Bounty: ${props.bounty}</h4>
        <h4>Family: {props.type}</h4>
      </div>
      <div className="buttons">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default BountyCard;
