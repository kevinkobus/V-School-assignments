const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Inventory model(blueprint)
const inventorySchema = new Schema({
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    style: {
        type: String,
    },
    price: {
        type: Number
    }
})


module.exports = mongoose.model("Inventory", inventorySchema)