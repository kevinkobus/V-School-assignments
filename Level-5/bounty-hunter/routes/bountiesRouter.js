const express = require("express");
const bountiesRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

const bounties = [
    { firstName: "Kermit",
        lastName: "The Frog",
        living: true,
        bounty: 100,
        type: "Jedi",
        _id: uuidv4()
    },
    { firstName: "Big",
        lastName: "Bird",
        living: true,
        bounty: 200,
        type: "Jedi",
        _id: uuidv4()
    },
    { firstName: "Oscar",
        lastName: "The Grouch",
        living: true,
        bounty: 75,
        type: "Sith",
        _id: uuidv4()
    },
    { firstName: "Count",
        lastName: "von Count",
        living: true,
        bounty: 125,
        type: "Sith",
        _id: uuidv4()
    }
]

bountiesRouter
  .route("/")
  .get((req, res) => {
    res.send(bounties);
  })
  .post((req, res) => {
    const newBounty = req.body;
    newBounty._id = uuidv4();
    bounties.push(newBounty);
    res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the database!`);
  });

  
module.exports = bountiesRouter;