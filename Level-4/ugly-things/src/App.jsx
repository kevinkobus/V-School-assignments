import React from "react";
import Header from "./components/Header";
import InputsForm from "./components/InputsForm";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import { ContextProvider } from "./components/Context";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Header />
        <InputsForm />
        <CardList />
        <Footer />
      </ContextProvider>
    </div>
  );
}

export default App;
