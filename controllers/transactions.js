const Transactions = require("../models/Transactions")

const createTransaction = async (req, res) => {
    const trans = await Transactions.create(req.body)
    res.status(200).send(trans)
}

const viewTrans=async(req,res) =>{
    const {id}= req.params
    const data= await Transactions.findById(id)
    res.status(200).json(data)
}

const updateTrans=async(req,res)=>{
    const {id}= req.params
    const data= await Transactions.findById(id)
    if(data){
        const update= await Transactions.updateOne(req.body)
        res.status(200).send(update)
    }
    else{
        res.status(404).send("id not present")
    }
}

const deleteTrans=async(req,res)=>{
    const{id} = req.params
    const data= await Transactions.findById(id)
    if(data){
        const info=await Transactions.deleteOne(data)
        res.status(200).send("deleted successfully")
    }
    else{
        res.status(404).send("no ID found")
    }
}
// view by pagination
const SearchTrans = async (req, res) => {
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const index = (page - 1) * limit;

    const data = await Transactions.find({})
        .skip(index)
        .limit(limit);

    res.status(200).send(data)
}

const SearchTransFileds = async (req, res) => {
    const searchTerm = req.query.searchTerm;
    const query = {
      $or: [
        { Category: { $regex: searchTerm, $options: 'i' } },
        { Phase : { $regex: searchTerm, $options: 'i' } }
      ]
    };
    Book.find(query, (err, books) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error searching for books');
      } else {
        res.json(books);
      }
    });
}


module.exports = {
    createTransaction,
    viewTrans,
    updateTrans,
    deleteTrans,
    SearchTrans,
    SearchTransFileds 
}