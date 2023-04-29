const listings = require("../models/propertyListing")

const createlisting = async (req, res) => {
    const list = await listings.create(req.body)
    res.status(200).send(list)
}

const viewlist=async(req,res) =>{
    const {id}= req.params
    const data= await listings.findById(id)
    res.status(200).json(data)
}

const updatelist=async(req,res)=>{
    const {id}= req.params
    const data= await listings.findById(id)
    if(data){
        const update= await listings.updateOne(req.body)
        res.status(200).send(update)
    }
    else{
        res.status(404).send("id not present")
    }
}

const deletelist=async(req,res)=>{
    const{id} = req.params
    const data= await listings.findById(id)
    if(data){
        const info=await listings.deleteOne(data)
        res.status(200).send("deleted successfully")
    }
    else{
        res.status(404).send("no ID found")
    }
}
// view by pagination
const Searchlist = async (req, res) => {
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const index = (page - 1) * limit;

    const data = await listings.find({})
        .skip(index)
        .limit(limit);

    res.status(200).send(data)
}
// search by property naem and address
const SearchlistFileds = async (req, res) => {
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
    createlisting,
    viewlist,
    updatelist,
    deletelist,
    Searchlist,
    SearchlistFileds 
}