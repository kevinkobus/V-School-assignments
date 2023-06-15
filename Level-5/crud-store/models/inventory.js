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
    price: Number
})


module.exports = mongoose.model("Inventory", inventorySchema)