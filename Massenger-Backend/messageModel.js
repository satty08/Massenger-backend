const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    username: String,
    message: String,
    timestamp: String
})

const mongoMessage = mongoose.model('messages', messageSchema)

module.exports = mongoMessage