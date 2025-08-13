const express = require('express');  //fn
const app = express(); //instance of your application

app.get('/' , (req,res)=>{
    res.send("welcome to root route nodemon bhai")
})

app.get('/home' , (req,res)=>{
    res.send('<h1>Balle balle</h1>')
})

const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`Server connected at port: ${PORT}`);
})