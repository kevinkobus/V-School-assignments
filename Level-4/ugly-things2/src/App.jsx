import React from "react";
// import "./App.css";
import Header from "./components/Header";
// import InputsForm from "./components/InputsForm";
// import CardList from "./components/CardList";
import Footer from "./components/Footer";
import { ThemeContextProvider } from "./components/ThemeContext";
// import { ContextProvider } from "./components/Context";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Header />
        <Footer />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
