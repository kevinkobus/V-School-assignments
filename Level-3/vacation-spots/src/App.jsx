import { useState } from "react";
import Card from "./components/Card";
import data from "./data"

function App() {
  const cards = data.map((item) => {
    return <Card 
    key={item.id} 
    {...item}
     />;
  });

  return (
    <div className="App">
      {cards}
    </div>
  );
}

export default App;
