const express = require("express");
const bountiesRouter = express.Router();
const Bounty = require("../models/bounty.js");

// GET all
bountiesRouter.get("/bounties", (req, res, next) => {
  Bounty.find({})
    .then((bounties) => {
      return res.status(200).send(bounties);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

// POST
bountiesRouter.post("/bounties", (req, res, next) => {
  const newBounty = new Bounty(req.body);
  newBounty
    .save()
    .then((savedBounty) => {
      return res.status(200).send(savedBounty);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

// GET one
bountiesRouter.get("/bounties/:bountyId", (req, res, next) => {
  Bounty.findById({ _id: req.params.bountyId })
    .then((foundBounty) => {
      if (!foundBounty) {
        return res.status(404).send("Item not found");
      }
      res.status(200).send(foundBounty);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

// GET one by type/family
bountiesRouter.get("/bounties/search/type", (req, res, next) => {
  Bounty.find({ type: req.query.type })
    .then((foundBounties) => {
      return res.status(200).send(foundBounties);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

// (PUT) Edit one
bountiesRouter.put("/bounties/:bountyId", (req, res, next) => {
  Bounty.findOneAndUpdate({ _id: req.params.bountyId }, req.body, { new: true })
    .then((updatedBounty) => {
      if (!updatedBounty) {
        return res.status(404).send("Item not found");
      }
      return res.status(200).send(updatedBounty);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

// DELETE one
bountiesRouter.delete("/bounties/:bountyId", (req, res, next) => {
  Bounty.findOneAndDelete({ _id: req.params.bountyId })
    .then((deletedBounty) => {
      if (!deletedBounty) {
        return res.status(404).send("Item not found");
      }
      return res
        .status(200)
        .send(`Successfully deleted item ${deletedBounty} from the database`);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

module.exports = bountiesRouter;
