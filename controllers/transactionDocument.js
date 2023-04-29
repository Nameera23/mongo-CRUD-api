const transactionDocuments = require("../models/transactionDocument")

const createtransactionDocument = async (req, res) => {
    const trans = await transactionDocuments.create(req.body)
    res.status(200).send(trans)
}

const viewtrans=async(req,res) =>{
    const {id}= req.params
    const data= await transactionDocuments.findById(id)
    res.status(200).json(data)
}
const viewAlltrans=async(req,res) =>{
    const data= await transactionDocuments.find()
    res.status(200).json(data)
}

const updatetrans=async(req,res)=>{
    const {id}= req.params
    const data= await transactionDocuments.findById(id)
    if(data){
        const update= await transactionDocuments.updateOne(req.body)
        res.status(200).send(update)
    }
    else{
        res.status(404).send("id not present")
    }
}

const deletetrans=async(req,res)=>{
    const{id} = req.params
    const data= await transactionDocuments.findById(id)
    if(data){
        const info=await transactionDocuments.deleteOne(data)
        res.status(200).send("deleted successfully")
    }
    else{
        res.status(404).send("no ID found")
    }
}

// search by fileds input
module.exports = {
    createtransactionDocument,
    viewtrans,
    updatetrans,
    deletetrans,
    viewAlltrans
  
}