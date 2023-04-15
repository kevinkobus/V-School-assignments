// Component for ugly car card list

import React, { useContext } from "react";
import { OpsContext } from "./OpsContext";
import Card from "./Card";

function CardList(props) {
    
  const { uglyCarArr } = useContext(OpsContext);

  const uglyCarList = uglyCarArr.map((data) => (
    <Card
      data={data}
      key={data.id}
      title={data.title}
      description={data.description}
      imgUrl={data.imgUrl}
    />
  ));

  return (
        <div className="cardList-container">
            {uglyCarList}
        </div>
  )
}

export default CardList;
