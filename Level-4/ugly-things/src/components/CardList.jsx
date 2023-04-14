import React, { useContext } from "react";
import Card from "./Card";
import { Context } from "./Context";

function CardList(props) {
  const { uglyArray } = useContext(Context);

  return (
    <div>
      {uglyCarArray.map((item) => {
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
