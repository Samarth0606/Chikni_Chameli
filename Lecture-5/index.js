const express = require('express');
const app = express();
const path = require('path');

const blogs = [
    {
        id: 1,
        author: "Samarth Vohra",
        comment: "Aaj kamaiyega tabhi to kal khaega meri jaan"
    },
    {
        id: 2,
        author: "Namit Jain",
        comment: "Bhai ka bday hai"
    },
    {
        id: 3,
        author: "Durgesh",
        comment: "Level sabke niklenge"
    },
    {
        id: 4,
        author: "Yuvraj Singh",
        comment: "Thala for a reason"
    },
    {
        id: 5,
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

// let password=900;
// app.use('/blogs', (req,res,next)=>{
//     if(password === 800){
//         next();
//     }
//     else{
//         res.send("Sorry nhi ho paega")
//     }
// })


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
    blogs.push({id:blogs.length+1 , author , comment })
    // res.send("blog created successfully")
    res.redirect('/blogs')
})

// Read
app.get('/blogs', (req,res)=>{
    res.render('blogs/index' , {blogs})
})
// update



// delete


app.listen(8080, ()=>{
    console.log(`Server connected at port: 8080`);
})  

//localhost:8080/