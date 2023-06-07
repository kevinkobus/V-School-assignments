import React, { useState } from "react";


function BountyCard(props) {
    // console.log(props)
    

  return (
    <div className="card-container">
      <img alt="pic"></img>
      <h2>First Name: {props.firstName}</h2>
      <h2>Last Name: {props.lastName}</h2>
      <h3>Status: {props.status}</h3>
      <h3>Bounty: ${props.bounty}</h3>
      <h3>Family: {props.type}</h3>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export default BountyCard;
