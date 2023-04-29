const transactionPropertys = require("../models/transactionProperty")

const createtransactionProperty = async (req, res) => {
    const trans = await transactionPropertys.create(req.body)
    res.status(200).send(trans)
}

const viewtrans=async(req,res) =>{
    const {id}= req.params
    const data= await transactionPropertys.findById(id)
    res.status(200).json(data)
}
const viewAlltrans=async(req,res) =>{
    const data= await transactionPropertys.find()
    res.status(200).json(data)
}

const updatetrans=async(req,res)=>{
    const {id}= req.params
    const data= await transactionPropertys.findById(id)
    if(data){
        const update= await transactionPropertys.updateOne(req.body)
        res.status(200).send(update)
    }
    else{
        res.status(404).send("id not present")
    }
}

const deletetrans=async(req,res)=>{
    const{id} = req.params
    const data= await transactionPropertys.findById(id)
    if(data){
        const info=await transactionPropertys.deleteOne(data)
        res.status(200).send("deleted successfully")
    }
    else{
        res.status(404).send("no ID found")
    }
}

// search by fileds input
module.exports = {
    createtransactionProperty,
    viewtrans,
    updatetrans,
    deletetrans,
    viewAlltrans
  
}