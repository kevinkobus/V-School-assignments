import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

//context hold axios requests as well as objects functions manipulations.
const Context = createContext();

//form state
function ContextProvider(props) {

  const [uglyThing, setUglyThing] = useState({
    title: "",
    imgUrl: "",
    description: "",
  });

  const [uglyCarArray, setUglyCarArray] = useState([]);

  // const [editMode, setEditMode] = useState(false);

  // const [editOption, setEditOption] = useState({
  //   title: "",
  //   description: "",
  // });

  //Function to handle state of form
  function handleChange(event) {
    const { name, value } = event.target;
    setUglyThing((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // console.log(uglyThing)
  }

  //Function that adds car to array of ugly cars
  function addUgly() {
    setUglyArray((prevState) => {
      return [...prevState, uglyThing];
    });
  }

  //Function to post a new ugly thing to the API
  function handleSubmit(e) {
    e.preventDefault();
    addUgly();
    axios
      .post("https://api.vschool.io/kevinkobus/thing", uglyThing)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  // //Delete request to delete a card from the list
  // function handleDelete(id) {
  //   axios
  //     .delete(`https://api.vschool.io/kevinkobus/thing/${id}`)
  //     .then((res) => getUglyThings())
  //     .catch((err) => console.log(err));
  // }

  //Get request
  function getUglyThings() {
    axios
      .get("https://api.vschool.io/kevinkobus/thing")
      .then((res) => {
        setUglyArray(res.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getUglyThings();
  }, []);

  // // Put request to edit an existing card's info
  // function handleEdit(id, editUgly) {
  //   axios
  //     .put(`https://api.vschool.io/kevinkobus/thing/${id}`, editUgly)
  //     .then((res) => console.log(res.data))
  //     .then(() => getUglyThings())
  //     .catch((err) => console.log(err));
  // }

  function handleEditChange(event) {
    const { name, value } = event.target;
    setEditOption(true);
    setEditData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }


  return (
    <Context.Provider
      value={{
        uglyThing,
        uglyCarArray,
        handleChange,
        handleSubmit,
        handleDelete,
        handleEdit,
        handleEditChange,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
