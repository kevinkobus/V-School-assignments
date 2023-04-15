// Context component for Form state and handling changes within the form
// Holds state for array of ugly cars that render to CardList
// Also holds state and edit/delete functionality for Card and CardList components

import React, { useEffect, useState, createContext } from "react";
// import axios from "axios";


const OpsContext = createContext();

function OpsContextProvider(props) {
  // Form state
  const [uglyCar, setUglyCar] = useState({
    title: "",
    imgUrl: "",
    description: "",
  });

  //Function to handle state of form
  function handleChange(event) {
    const { name, value } = event.target;
    setUglyCar((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(uglyCar);
  }
  // Setting state for array of ugly cars
  const [uglyCarArr, setUglyCarArr] = useState([]);




  return (
    <OpsContext.Provider
      value={{
        uglyCar,
        uglyCarArr,
        handleChange,
      }}
    >
      {props.children}
    </OpsContext.Provider>
  );
}

export { OpsContextProvider, OpsContext };
