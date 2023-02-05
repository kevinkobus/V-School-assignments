import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="card">
        <Header />
        <Meme />
      </div>
    </div>
  );
}

export default App;
