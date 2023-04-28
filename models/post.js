const mongoose = require('mongoose')

const post = new mongoose.Schema({
    category: { type: String, required: true },
    channel: { type: String, required: true },
    postTitle: { type: String, required: true },
    publishDate: { type: Date, required: true },
    minDate: { type: Date, required: true },
    author: { type: String, required: true },
    url: { type: String, required: true },
    file: { type: String, required: true },
    blurb: { type: String, required: true },
    level: { type: String, required: true },
    comment: { type: String, required: true }
})

module.exports = mongoose.model('Post', post)