import React from "react";
import DjSquares from "./components/DjSquares";
import "./App.css";

function App() {
  return (
    <main className="App">
      <DjSquares colorChange={true} />
    </main>
  );
}

export default App;
