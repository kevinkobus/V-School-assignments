const express = require("express");
const groceriesRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

const groceries = [
  {
    name: "banana",
    type: "produce",
    price: 0.99,
    _id: uuidv4(),
  },
  {
    name: "oranges",
    type: "produce",
    price: 2.39,
    _id: uuidv4(),
  },
  {
    name: "carrots",
    type: "produce",
    price: 1.09,
    _id: uuidv4(),
  },
  {
    name: "tomatoes",
    type: "produce",
    price: 2.9,
    _id: uuidv4(),
  },
  {
    name: "ground beef",
    type: "meat",
    price: 4.99,
    _id: uuidv4(),
  },
  {
    name: "chicken thighs",
    type: "meat",
    price: 6.99,
    _id: uuidv4(),
  },
];

// Get All
// groceriesRouter.get("/", (req, res) => {
//   res.send(groceries);
// });

// Max & Min price inputs
let max = 3
let min = 2

// Get all or by price range input
groceriesRouter.get("/", (req, res) => {
  const price = req.query.price
  // filter by a max price
  const maxPrice = groceries.filter((item) => item.price <= max)
  // filter by a min price
  const minPrice = groceries.filter((item) => item.price >= min)
  // combine min & max arrays with only the items that appear in both
  const groceryResults = maxPrice.filter(item => minPrice.includes(item))
  res.send(groceryResults)
})

// Get One
groceriesRouter.get("/:groceriesId", (req, res) => {
  const groceriesId = req.params.groceriesId;
  const foundGroceries = groceries.find((item) => item._id === groceriesId);
  res.send(foundGroceries);
});

// Get by type
groceriesRouter.get("/search/type", (req, res) => {
  const type = req.query.type;
  const filteredType = groceries.filter((item) => item.type === type);
  res.send(filteredType);
});


module.exports = groceriesRouter;
