import React from "react";
import Friend from "./Friend";
import data from "../data";

function FriendList() {
  const friends = data.map((person) => {
    return <Friend key={person.id} {...person} />;
  });
  console.log(friends);
  return <div className="friend-container">{friends}</div>;
}

export default FriendList;
