import React, { useContext } from "react";
import Card from "./Card";
import { UglyContext } from "./Context";

function CardList() {
  const { uglyArray } = useContext(UglyContext);

  return (
    <div>
      {uglyArray.map((item) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            imgUrl={item.imgUrl}
          />
        );
      })}
    </div>
  );
}

export default CardList;
