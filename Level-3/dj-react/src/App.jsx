import React from "react";
import data from "./data";
import Box from "./components/Box";
import "./App.css";

function App() {
  const [squares, setSquares] = React.useState(data);

  const squareElements = squares.map((square) => (
    <Box key={square.id} on={square.on} />
  ));

  return <main className="box-container">{squareElements}
            
          </main>;
}

export default App;
