 // const [displayEditBtn, setDisplayEditBtn] = useState(false);

  // const [edit, setEdit] = useState({
  //   title: "",
  //   description: "",
  // });


  // //Delete request to delete a card from the list
  // function handleDelete(id) {
  //   axios
  //     .delete(`https://api.vschool.io/kevinkobus/thing/${id}`)
  //     .then((res) => getUglyCars())
  //     .catch((err) => console.log(err));
  // }

  // // Put request to edit an existing ugly car card's info
  // function handleEdit(id, editUglyCar) {
  //   axios
  //     .put(`https://api.vschool.io/kevinkobus/thing/${id}`, editUglyCar)
  //     .then((res) => console.log(res.data))
  //     .then(() => getUglyCars())
  //     .catch((err) => console.log(err));
  // }

  // function handleEditChange(event) {
  //   const { name, value } = event.target;
  //   setDisplayEditBtn(true);
  //   setEdit((prevState) => {
  //     return {
  //       ...prevState,
  //       [name]: value,
  //     };
  //   });
  // }