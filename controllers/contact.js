const Contacts = require("../models/contact")

const createContact = async (req, res) => {
    const cont = await Contacts.create(req.body)
    res.status(200).send(cont)
}

const viewcont=async(req,res) =>{
    const {id}= req.params
    const data= await Contacts.findById(id)
    res.status(200).json(data)
}

const updatecont=async(req,res)=>{
    const {id}= req.params
    const data= await Contacts.findById(id)
    if(data){
        const update= await Contacts.updateOne(req.body)
        res.status(200).send(update)
    }
    else{
        res.status(404).send("id not present")
    }
}

const deletecont=async(req,res)=>{
    const{id} = req.params
    const data= await Contacts.findById(id)
    if(data){
        const info=await Contacts.deleteOne(data)
        res.status(200).send("deleted successfully")
    }
    else{
        res.status(404).send("no ID found")
    }
}
// view by pagination
const Searchcont = async (req, res) => {
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const index = (page - 1) * limit;

    const data = await Contacts.find({})
        .skip(index)
        .limit(limit);

    res.status(200).send(data)
}

const SearchcontFileds = async (req, res) => {
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
    createContact,
    viewcont,
    updatecont,
    deletecont,
    Searchcont,
    SearchcontFileds 
}