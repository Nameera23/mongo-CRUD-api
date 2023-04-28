const mongoose = require('mongoose')

const propertyListing = new mongoose.Schema({
    agentaId: { type: Number, required: true },
    listingAgent: { type: String, required: true },
    category: { type: String, required: true },
    mlsId: { type: String },
    propertyType: { type: String },
    mlsNumber: { type: String, required: true },
    associateNAme: { type: String, required: true },
    price: { type: String },
    garage: { type: String },
    bed: { type: String },
    subDivision: { type: String, required: true },
    country: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    district: { type: String, required: true },
    areaLocation: { type: String, required: true },
    status: { type: String, required: true },
    listDate: { type: Date, required: true },
})

module.exports = mongoose.model('property Listing', propertyListing)