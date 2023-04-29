const posts = require("../models/post")

const createpost = async (req, res) => {
    const post = await posts.create(req.body)
    res.status(200).send(post)
}
const viewpost=async(req,res) =>{
    const {id}= req.params
    const data= await posts.findById(id)
    res.status(200).json(data)
}

const viewAllpost=async(req,res) =>{
    const data= await posts.find()
    res.status(200).json(data)
}

const updatepost=async(req,res)=>{
    const {id}= req.params
    const data= await posts.findById(id)
    if(data){
        const update= await posts.updateOne(req.body)
        res.status(200).send(update)
    }
    else{
        res.status(404).send("id not present")
    }
}

const deletepost=async(req,res)=>{
    const{id} = req.params
    const data= await posts.findById(id)
    if(data){
        const info=await posts.deleteOne(data)
        res.status(200).send("deleted successfully")
    }
    else{
        res.status(404).send("no ID found")
    }
}

// search by post title
const SearchpostFileds = async (req, res) => {
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
    createpost,
    viewpost,
    updatepost,
    deletepost,
    viewAllpost,
    SearchpostFileds 
}