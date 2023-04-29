const mongoose= require('mongoose')
const transDoc= new mongoose.Schema({
    Document:{type: String, required: true},
    agentId:{type: String, required: true},
    attach_type:{type: String, required: true}
})
module.exports=mongoose.model('Transaction_Document', transDoc)