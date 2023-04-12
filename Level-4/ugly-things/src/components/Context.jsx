import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

//context hold axios requests as well as objects functions manipulations.
const UglyContext = createContext();

//form state
function ContextProvider(props) {

  // const [uglyThing, setUglyThing] = useState({
  //   title: "",
  //   imgUrl: "",
  //   description: "",
  // });

  // const [uglyArray, setUglyArray] = useState([]);
  // const [editMode, setEditMode] = useState(false);
  // const [editOption, setEditOption] = useState({
  //   title: "",
  //   description: "",
  // });

  // //handles the change of state
  // function handleChange(event) {
  //   const { name, value } = event.target;
  //   setUglyThing((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  //   // console.log(uglyThing)
  // }

  // //function that adds things to an array of uglies
  // function addUgly() {
  //   setUglyArray((prevState) => {
  //     return [...prevState, uglyThing];
  //   });
  // }

  // //onClick form will handle Submit function to post a new ugly thing to an API
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   addUgly();
  //   axios
  //     .post("https://api.vschool.io/kevinkobus/thing", uglyThing)
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  // }

  // //Delete request to delete a card from the list
  // function handleDelete(id) {
  //   axios
  //     .delete(`https://api.vschool.io/kevinkobus/thing/${id}`)
  //     .then((res) => getUglyThings())
  //     .catch((err) => console.log(err));
  // }

  // //Get request
  // function getUglyThings() {
  //   axios
  //     .get("https://api.vschool.io/kevinkobus/thing")
  //     .then((res) => {
  //       setUglyArray(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }

  // useEffect(() => {
  //   getUglyThings();
  // }, []);

  // //Put request to edit an existing card's info
  // function handleEdit(id, editUgly) {
  //   axios
  //     .put(`https://api.vschool.io/kevinkobus/thing/${id}`, editUgly)
  //     .then((res) => console.log(res.data))
  //     .then(() => getUglyThings())
  //     .catch((err) => console.log(err));
  // }

  // function handleEditChange(event) {
  //   const { name, value } = event.target;
  //   setEditOption(true);
  //   setEditData((prevState) => {
  //     return {
  //       ...prevState,
  //       [name]: value,
  //     };
  //   });
  // }

  const [colorTheme, setColorTheme] = useState("green")

  const toggleTheme = () => {
    setColorTheme((prevColor) => (prevColor === "red" ? "green" : "red"));
  };

  return (
    <UglyContext.Provider
      value={{
        // uglyThing,
        // uglyArray,
        // handleChange,
        // handleSubmit,
        // handleDelete,
        // handleEdit,
        // handleEditChange,
        colorTheme: colorTheme,
        toggleTheme: toggleTheme,
      }}
    >
      {props.children}
    </UglyContext.Provider>
  );
}

export { ContextProvider, UglyContext };
