const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const netaRoutes = require('./routes/neta.route');
const methodOverride = require('method-override')

 
// override with POST having ?_method=DELETE

mongoose.connect('mongodb://127.0.0.1:27017/neta')
.then(()=>{
    console.log("DB CONNECTED");
})
.catch((er)=>{
    console.log("err:" , er);
})

app.set('view engine' , 'ejs');
app.set('views', path.join(__dirname , 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json()) //json
app.use(express.urlencoded({ extended: true })) //form data
app.use(methodOverride('_method'))

netaRoutes(app);

const PORT = 8000;
app.listen(PORT , ()=>{
    console.log(`SERVER CONNECTED AT PORT: ${PORT}`);
})