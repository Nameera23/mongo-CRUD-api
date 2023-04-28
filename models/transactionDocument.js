const mongoose= require('mongoose')
const transDoc= new mongoose.Schema({
    Document:{type: String, required: true},
    agentId:{type: String, required: true},
    type:{type: String, required: true}
})
module.exports=mongoose.model('Transaction Document', transDoc)