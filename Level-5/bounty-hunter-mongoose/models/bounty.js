const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Bounty model/blueprint
const bountySchema = new Schema({
    headShot: {
        type: String
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    living: {
        type: Boolean
    },
    bounty: {
        type: Number,
        required: true
    },
    family: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model("Bounty", bountySchema)