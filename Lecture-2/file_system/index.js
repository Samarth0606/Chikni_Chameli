// import fs  from 'fs' //esmodule
const fs = require('fs');

// create
// let data = "nammaste ji ki haal chaal copy to all"
// fs.writeFile('sam.txt' , data , {
//     encoding: "utf-8",
//     flag: 'w'
// } , (err)=>{
//     if(err){ throw err}
//     console.log("File created successfully");
// })

// read
// fs.readFile('sam.txt' ,{
//     encoding: "utf-8",
//     flag:'r'
// },(err,data)=>{
//     if(err){ throw err}
//     console.log(data);
// })

// fs.readFile('sam.txt' ,{},(err,data)=>{
//     if(err){ throw err}
//     console.log(data.toString());
// })

// update
// fs.appendFile('sam.txt' , 'mai nhi  bata rha' , (err)=>{
//     if(err){throw err}
//     console.log("data edited successfully");
// })

// delete
fs.unlink('sam.txt',(err)=>{
    if(err){ throw err}
    console.log("file deleted successfully");
})