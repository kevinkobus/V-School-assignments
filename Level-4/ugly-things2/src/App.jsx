import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Card from "./components/Card"
// import CardList from "./components/CardList";
import Footer from "./components/Footer";
import { ThemeContextProvider } from "./components/ThemeContext";
import { OpsContextProvider } from "./components/OpsContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Header />
        <OpsContextProvider>
          <Form />
          <Card />
        </OpsContextProvider>
        <Footer />
      </ThemeContextProvider>
    </div>
  );
}

export default App;