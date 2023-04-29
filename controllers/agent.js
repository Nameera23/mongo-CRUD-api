const user = require("../models/agent")

const createAgent = async (req, res) => {
    const cont = await user.create(req.body)
    res.status(200).send(cont)
}
module.exports={
    createAgent
}