const express = require("express");
const bountiesRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

const bounties = [
  {
    firstName: "Kermit",
    lastName: "The Frog",
    living: true,
    bounty: 100,
    type: "Muppets",
    _id: uuidv4(),
  },
  {
    firstName: "Big",
    lastName: "Bird",
    living: true,
    bounty: 200,
    type: "Sesame Street",
    _id: uuidv4(),
  },
  {
    firstName: "Oscar",
    lastName: "The Grouch",
    living: true,
    bounty: 75,
    type: "Sesame Street",
    _id: uuidv4(),
  },
  {
    firstName: "Count",
    lastName: "von Count",
    living: true,
    bounty: 125,
    type: "Sesame Street",
    _id: uuidv4(),
  },
  {
    firstName: "Miss",
    lastName: "Piggy",
    living: true,
    bounty: 200,
    type: "Muppets",
    _id: uuidv4(),
  },
];

// Get all & Post
bountiesRouter
  .route("/bounties")
  .get((req, res) => {
    res.send(bounties);
  })
  .post((req, res) => {
    const newBounty = req.body;
    newBounty._id = uuidv4();
    bounties.push(newBounty);
    res.send(
      `Successfully added ${newBounty.firstName} ${newBounty.lastName} to the database!`
    );
  })

  // Get one
bountiesRouter.get("/bounties/:bountyId", (req, res) => {
  bountyId =req.params.bountyId
  const foundBounty = bounties.find((bounty) => bounty._id === bountyId)
  res.send(foundBounty)
})

// Edit one
  bountiesRouter.put("/bounties/:bountyId", (req, res) => {
    bountyId = req.params.bountyId
    const updateObject = req.body
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], updateObject)
    res.send(updatedBounty)
  })

  // Delete one
  bountiesRouter.delete("/bounties/:bountyId", (req, res) => {
    bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Successfully deleted bounty!")
  })

module.exports = bountiesRouter;
