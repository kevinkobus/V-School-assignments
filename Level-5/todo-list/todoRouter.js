const express = require("express");
const todoRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

const todos = [
  {
    name: "empty trash",
    description: "take trash out of house and put into garbage can",
    imageUrl: "http://www.garbagecan....",
    completed: false,
    _id: uuidv4(),
  },
  {
    name: "wash dishes",
    description: "wash all dishes in the sink with soap and water",
    imageUrl: "http://www.dirtysink....",
    completed: false,
    _id: uuidv4(),
  },
  {
    name: "do laundry",
    description: "wash, dry, fold, and put away clothes",
    imageUrl: "http://www.stinkyunderwear....",
    completed: false,
    _id: uuidv4(),
  },
];

// todoRouter.get("/", (req, res) => {
//   res.send(todos);
// });

todoRouter
  .route("/")
  .get((req, res) => {
    res.send(todos);
  })
  .post((req, res) => {
    const newTodo = req.body;
    newTodo._id = uuidv4();
    todos.push(newTodo);
    res.send(
      `Successfully added ${newTodo.name} to the database!`
    );
  })





  

module.exports = todoRouter;
