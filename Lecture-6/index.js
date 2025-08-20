const { log } = require('console');
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override')
const { v4: uuidv4 }  =  require('uuid');

let blogs = [
    {
        id: uuidv4(),
        author: "Samarth Vohra",
        comment: "Aaj kamaiyega tabhi to kal khaega meri jaan"
    },
    {
        id: uuidv4(),
        author: "Namit Jain",
        comment: "Bhai ka bday hai"
    },
    {
        id: uuidv4(),
        author: "Durgesh",
        comment: "Level sabke niklenge"
    },
    {
        id: uuidv4(),
        author: "Yuvraj Singh",
        comment: "Thala for a reason"
    },
    {
        id: uuidv4(),
        author: "Priyanshu",
        comment: "  Papa vo cycle ki to...."
    },

]



app.set('view engine' , 'ejs');
app.set('views', path.join(__dirname, 'views'));
// middleware for serving static files
app.use(express.static(path.join(__dirname, 'public')))
// body parsing middleware  (by default undefined)
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method')) //middleware of patch/put/delete

//root route
app.get('/' , (req,res)=>{
    res.send("hello from root route")
})

// create 
// form
app.get('/blog/new' , (req,res)=>{
    res.render('blogs/new')
})
app.post('/blogs' , (req,res)=>{
    let {author,comment} = req.body;
    // blogs.push({id:blogs.length+1 , author , comment })
    blogs.push({id:uuidv4(), author , comment })
    // res.send("blog created successfully")
    res.redirect('/blogs')
})

// Read
app.get('/blogs', (req,res)=>{
    res.render('blogs/index' , {blogs})
})

// particular blog
app.get('/blogs/:idd' , (req,res)=>{
    let {idd} = req.params;
    // let foundBlog = blogs.find((blog)=> blog.id === parseInt(idd) )
    let foundBlog = blogs.find((blog)=> blog.id == idd )
    res.render('blogs/show', {foundBlog})
})

// update
app.get('/blogs/:idd/edit' , (req,res)=>{
    let {idd} = req.params;
    let foundBlog = blogs.find((blog)=> blog.id == idd )
    res.render('blogs/edit' ,{foundBlog})
})

app.patch('/blogs/:iddd' , (req,res)=>{
    let {iddd} = req.params;
    let foundBlog = blogs.find((blog)=> blog.id == iddd )
    let {author,comment} = req.body;
    foundBlog.author = author;
    foundBlog.comment = comment;
    res.redirect('/blogs')
})

// delete
app.delete('/blogs/:iddd' , (req,res)=>{
    let {iddd} = req.params;
    let newArray = blogs.filter((blog)=> blog.id != iddd )
    blogs = newArray;
    res.redirect('/blogs')
})


app.listen(8080, ()=>{
    console.log(`Server connected at port: 8080`);
})  

//localhost:8080/