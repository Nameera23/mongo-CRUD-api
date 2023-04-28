const mongoose= require('mongoose')

const expense= new mongoose.Schema({
    entryDate:{type: Date, required: true},
    amount:{type: Number, required: true},
    reason:{type: String, required: true},
    paidTo:{type: String, required: true},
    description:{type: String, required: true},
    type:{type: String, required: true},
})

module.exports= mongoose.model('expenses',expense)