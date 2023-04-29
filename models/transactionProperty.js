const mongoose=require('mongoose')

const TransProp = new mongoose.Schema({
    streetNumber:{type: Number, required: true},
    streetDirection:{type: String, required: true},
    streetName:{type: String, required: true},
    unit:{type: Number, required: true},
    city:{type: String, required: true},
    province:{type: String, required: true},
    postalCode:{type: String, required: true},
    listSale:{type: Number, required: true},
    listLease:{type: Number, required: true},
})

module.exports= mongoose.model('transaction_property', TransProp)