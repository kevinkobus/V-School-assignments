// Context component for Form state and handling changes within the form
// Holds state for array of ugly cars that render to CardList
// Also holds state and edit/delete functionality for Card and CardList components

import React, { useEffect, useState, createContext } from "react";
import Card from "./Card";
import axios from "axios";

const OpsContext = createContext();

function OpsContextProvider(props) {
  // Form state
  const [uglyCar, setUglyCar] = useState({
    title: "",
    imgUrl: "",
    description: "",
  });

  //Function to handle state of form inputs
  function handleChange(e) {
    const { name, value } = e.target;
    setUglyCar((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // console.log(uglyCar);
  }
  // Setting state for array of ugly cars
  const [uglyCarArr, setUglyCarArr] = useState([]);

  //Function that adds car to uglyCarArr
  function addUglyCar() {
    setUglyCarArr((prevState) => {
      return [...prevState, uglyCar];
    });
  }

  //Function for axios GET request to pull from the API and set state
  useEffect(() => {
    axios
      .get("https://api.vschool.io/kevinkobus/thing")
      .then((res) => {
        setUglyCarArr(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log(uglyCarArr)

  //Function to POST a new uglyCar to API
  function handleSubmit(e) {
    e.preventDefault();
    addUglyCar();
    axios
      .post("https://api.vschool.io/kevinkobus/thing", uglyCar)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  const uglyCarList = uglyCarArr.map((car, index) => (
    <Card
      key={index}
      car={car}
      id={car._id}
      title={car.title}
      description={car.description}
      imgUrl={car.imgUrl}
    />
  ));

  //DELETE request to delete a card from the list and then re-render
  function handleDelete(id) {
    console.log(`delete: ${id}`)
    axios.delete(`https://api.vschool.io/kevinkobus/thing/${id}`)
    .then(res =>  setUglyCarArr(prevState => prevState.filter(car => car._id !== id)))
        .catch((err) => console.log(err));
    };


  // Editing state
  const [editCar, setEditCar] = useState({
    title: "",
    description: "",
  });

  // Save button state
  const [displaySaveBtn, setDisplaySaveBtn] = useState(false);

  // Runs when edit button is clicked and changes edit btn to save btn
  function handleEditClick() {
    console.log("edit mode")
    setDisplaySaveBtn(prevState => !prevState)
    console.log(displaySaveBtn)
  }

function handleEditChange(event) {
    const { name, value } = event.target
    setEditCar(prevState => {
      return {
        ...prevState,
        [name]: value,
      }//
    });
  }
  
  // PUT request to edit an existing ugly car card's info
  // axios
  // .put("https://api.vschool.io/kevinkobus/thing", editUglyCar)
  //   .then(res =>  setEditUglyCar(prevState => prevState.filter(car => car._id !== id)))
  //       .catch((err) => console.log(err));
   
  

  return (
    <OpsContext.Provider
      value={{
        uglyCar,
        uglyCarArr,
        uglyCarList,
        handleChange,
        handleSubmit,
        handleDelete,
        handleEditClick,
        // handleEditChange,
      }}
    >
      {props.children}
    </OpsContext.Provider>
  );
}

export { OpsContextProvider, OpsContext };
