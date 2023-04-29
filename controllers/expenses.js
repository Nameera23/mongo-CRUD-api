const expenses = require("../models/expenses")

const createexpense = async (req, res) => {
    const cont = await expenses.create(req.body)
    res.status(200).send(cont)
}

const viewcont=async(req,res) =>{
    const {id}= req.params
    const data= await expenses.findById(id)
    res.status(200).json(data)
}

// fields input


module.exports = {
    createexpense,
    viewcont
}