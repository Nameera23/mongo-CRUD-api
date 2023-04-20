const mongoose = require("mongoose")

const transactions = new mongoose.Schema({
    Category: {
        type: String,
        required: true
    },

    Type: {
        type: String,
        required: true
    },
    Phase: {
        type: String,
        required: true
    },
    Represent: {
        type: String,
        required: true
    },
    Contact: {
        type: String,
        required: true
    },
    AgentID: {
        type: Number,
        required: true
    },
},
    {timestamps: true})
module.exports= mongoose.model('Transactions',transactions)