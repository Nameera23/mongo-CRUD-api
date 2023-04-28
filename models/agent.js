const mongoose= require('mongoose')

const agent= new mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true},
    password:{type: String, required: true},
    agentId:{type: String, required: true},
})