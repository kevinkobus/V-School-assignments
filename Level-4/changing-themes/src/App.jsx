import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { ThemeContextProvider } from "./components/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <Body />
        <Footer />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
