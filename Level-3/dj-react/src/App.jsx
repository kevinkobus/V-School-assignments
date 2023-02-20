import React from "react";
import data from "./data";
import Box from "./components/Box";
import "./App.css";

function App() {
  const [squares, setSquares] = React.useState(data);

  function toggle(id) {
    console.log(id)
  }

  const squareElements = squares.map(square => (
    <Box 
    key={square.id} 
    id={square.id}
    on={square.on}
    toggle={toggle} 
    />
  ));

  return <main className="box-container">
            {squareElements}
        </main>;
}

export default App;
