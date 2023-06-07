const express = require("express");
const bountiesRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

const bounties = [
  {
    headShot: "https://i.pinimg.com/originals/f7/f6/d8/f7f6d8f7ca7a4e2f891c86dc4e607a28.png",
    firstName: "Kermit",
    lastName: "The Frog",
    living: true,
    bounty: 100,
    type: "Muppets",
    _id: uuidv4(),
  },
  {
    headShot: "https://i.ebayimg.com/images/g/YjsAAOSwkSZgTU4~/s-l1600.jpg",
    firstName: "Big",
    lastName: "Bird",
    living: true,
    bounty: 200,
    type: "Sesame Street",
    _id: uuidv4(),
  },
  {
    headShot: "https://akns-images.eonline.com/eol_images/Entire_Site/2013915/rs_1024x759-131015104822-1024.-oscar-the_grouch.ls.101513.jpg?fit=around%7C1024:759&output-quality=90&crop=1024:759;center,top",
    firstName: "Oscar",
    lastName: "The Grouch",
    living: true,
    bounty: 75,
    type: "Sesame Street",
    _id: uuidv4(),
  },
  {
    headShot: "https://i.scdn.co/image/ab6761610000e5eb3c440e8ded13dd10533a22fa",
    firstName: "Count",
    lastName: "von Count",
    living: true,
    bounty: 125,
    type: "Sesame Street",
    _id: uuidv4(),
  },
  {
    headShot: "https://assets.mycast.io/actor_images/actor-miss-piggy-427324_large.jpg?1652380488",
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
