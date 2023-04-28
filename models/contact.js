const mongoose = require('mongoose')

const contact = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    company: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    agentId: { type: Number, required: true }
})

module.exports = mongoose.model('contacts', contact)