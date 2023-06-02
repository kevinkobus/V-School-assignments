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

// Get all & Post
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

// Get One
todoRouter.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId;
    const foundTodo = todos.find((todo) => todo._id === todoId);
    res.send(foundTodo);
  });

// Delete One
todoRouter.delete("/:todoId", (req, res) => {
    const todoId = req.params.tododId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send("Successfully deleted todo!")
  })
  
  // Update One
  todoRouter.put("/:todoId", (req, res) => {
    todoId = req.params.todoId
    const updateObject = req.body
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], updateObject)
    res.send(updatedTodo)
  })



module.exports = todoRouter;
