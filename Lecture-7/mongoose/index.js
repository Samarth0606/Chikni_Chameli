const express = require('express');
const app  = express();
const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/begum')
mongoose.connect('mongodb+srv://samarthvohraindia:qln6PYlVec51oZ4Y@cluster0.fxyz1nh.mongodb.net/')
.then(()=>{
    console.log("db connected successfully");
})
.catch((err)=>{
    console.log("ERROR:" , err);
})

app.get('/' , (req,res)=>{  res.send("Welcome")  }) 

const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`SERVER CIONNECTED AT PORT: ${PORT}`)
})