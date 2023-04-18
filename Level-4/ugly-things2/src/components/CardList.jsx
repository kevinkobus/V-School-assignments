// Component for ugly car card list

import React, { useContext } from "react";
import { OpsContext } from "./OpsContext";

function CardList() {

  const { uglyCarList } = useContext(OpsContext);

  return <div className="cardList-container">{uglyCarList}</div>;
}

export default CardList;
