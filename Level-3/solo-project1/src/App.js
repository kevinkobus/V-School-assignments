import React from "react";
import Info from "./Info.js";
import About from "./About.js";
import Interests from "./Interests.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="background">
      <div className="container">
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
}

export default App;
