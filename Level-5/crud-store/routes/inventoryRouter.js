const express = require("express");
const inventoryRouter = express.Router();
const Inventory = require("../models/inventory.js");

// Get All
inventoryRouter.get("/", (req, res, next)=> {
    Inventory.find({})
    .then(inventory => {
        return res.status(200).send(inventory)
    })
    .catch(err => {
        res.status(500)
        return next(err)
    })
})


// Get One

// Post

// Delete

// Edit/Update

module.export = inventoryRouter;
