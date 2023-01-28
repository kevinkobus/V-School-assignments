import React from "react";
import Friend from "./Friend";
import Pets from "./Pets";

function FriendList() {
  const friendList = data.map((item) => {
    return <Friend key={item.id} {...item} />;
  });

  return <div className="friendList-container">{friendList}</div>;

  const petList = data.map((item) => {
    return <Pets key={item.id} {...item} />;
  });

  return <div className="pet-container">{petList}</div>;
}

export default FriendList;
