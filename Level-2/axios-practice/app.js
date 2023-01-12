const axios = require("axios");

// function assignResponseToVariable(response){
//     console.log(response.data);
// }

// axios.get('https://swapi.dev/api/people/1').then(assignResponseToVariable)

// Get requests with axios
// url: https://api.vschool.io/scrimbalessons/todo

// Get All
axios
  .get("https://api.vschool.io/kevinkobus/todo")
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error));

// Get All and put on the DOM
// axios
//   .get("https://api.vschool.io/kevinkobus/todo")
//   .then((response) => {
//     for(let i = 0; i < response.data.length; i++){
//         const h1 = document.createElement('h1')
//         h1.textContent = response.data[i].title
//         document.body.appendChild(h1)
//     }
//   })
//   .catch((error) => console.log(error));

// Get One
// axios
//   .get("https://api.vschool.io/kevinkobus/todo/6388e56118d1a05bceae8a80")
//   .then((response) => console.log(response.data))
//   .catch((error) => console.log(error));

// Post request
// Request Body
// const newTodo = {
//   title: "My 3rd Todo",
//   description: "This is my 3rd entry",
//   imgUrl:
//     "https://images.unsplash.com/photo-1569429593410-b498b3fb3387?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80",
// };
// axios
//   .post("https://api.vschool.io/kevinkobus/todo", newTodo)
//   .then((response) => console.log(response.data))
//   .catch((error) => console.log(error));


