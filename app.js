const express = require("express")
const mongoose= require("mongoose")
const app= express()
const transaction= require("./routes/transactions")
const url='mongodb://127.0.0.1/clientApp'

mongoose.connect(url,{useNewUrlParser:true})

const con= mongoose.connection
app.use(express.json())

app.use('/trans',transaction)

con.on('open',function(){
    console.log('connected to port 8000......')
})

app.listen(8000,()=>{
    console.log("Server Started")
})