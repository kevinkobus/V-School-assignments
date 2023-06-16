const express = require("express");
const inventoryRouter = express.Router();
const Inventory = require("../models/inventory.js");

// Get All
inventoryRouter.get("/", (req, res, next) => {
  Inventory.find({})
    .then((items) => {
      return res.status(200).send(items);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

// Get One
inventoryRouter.get("/:itemId", (req, res, next) => {
  Inventory.findById({ _id: req.params.itemId })
    .then((foundItem) => {
      if (!foundItem) {
        return res.status(404).send("Item not found");
      }
      return res.status(200).send(foundItem);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

// Post
inventoryRouter.post("/", (req, res, next) => {
  const newItem = new Inventory(req.body);
  newItem
    .save()
    .then((savedItem) => {
      return res.status(200).send(savedItem);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

// Delete One
inventoryRouter.delete("/:itemId", (req, res, next) => {
  Inventory.findOneAndDelete({ _id: req.params.itemId })
    .then((deletedItem) => {
      if (!deletedItem) {
        return res.status(404).send("Item not found");
      }
      return res
        .status(200)
        .send(`Successfully deleted item ${deletedItem} from the database`);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

// Edit/Update
inventoryRouter.put("/:itemId", (req, res, next) => {
  Inventory.findOneAndUpdate(
    { _id: req.params.itemId }, // find this one to update
    req.body, // update the object with this data
    { new: true }) // send back the updated version
    .then((updatedItem) => {
      if (!updatedItem) {
        return res.status(404).send("Item not found");
      }
      return res.status(200).send(updatedItem);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

// Get by make
inventoryRouter.get("/search/make", (req, res, next) => {
  Inventory.find({ make: req.query.make })
    .then((items) => {
      return res.status(200).send(items);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

module.exports = inventoryRouter;
