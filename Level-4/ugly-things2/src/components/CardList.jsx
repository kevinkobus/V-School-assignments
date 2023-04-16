// Component for ugly car card list

import React, { useContext } from "react";
import { OpsContext } from "./OpsContext";
import Card from "./Card";

function CardList(props) {
    
  const { uglyCarArr } = useContext(OpsContext);

  const uglyCarList = uglyCarArr.map((car) => (
    <Card
      car={car}
      key={car._id}
      title={car.title}
      description={car.description}
      imgUrl={car.imgUrl}
    />
  ));

  return (
        <div className="cardList-container">
            {uglyCarList}
        </div>
  )
}

export default CardList;
