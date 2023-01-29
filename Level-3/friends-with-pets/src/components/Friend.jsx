import React from "react";
import Pets from "./Pets";

function Friend(props) {
  const furryFriends = props.pets.map((pet) => {
    return <Pets key={pet.id} {...pet} />;
  });

  return (
    <div className="info-container">
      <section className="friend-section">
        <div className="friend-info">
          <h2>{props.name}</h2>
          <h3>age: {props.age}</h3>
        </div>
      </section>
      <section className="pet-section">{furryFriends}</section>
    </div>
  );
}

export default Friend;
