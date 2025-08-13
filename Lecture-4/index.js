const express = require('express');
const app = express();
const path = require('path');

let arr = [10,20,30,40,50];

app.set('view engine' , 'ejs')
app.set('views' , path.join(__dirname,'views'));
//__dirnae/views

app.get('/' , (req,res)=>{
    res.send("Welcome to Root route")
})

app.get('/samarth'  , (req,res)=>{
    // res.send("Welcome samarth")
    res.render('products/index', {arr:arr})
})

// app.get('*', (req,res)=>{
//     res.send("Invalid route")
// })

const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`SERVER CONNECTED AT PORT: ${PORT}`);
})