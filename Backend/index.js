// const express = require('express');
// const port  = 5500;
// const app = express();
// app.get('/',function(req,res){
//     // res.send('hello world!')
//     res.json({
//         name:"revanth",
//         age:18
//     })
// })
// app.post('/greet',function(req,res){
//     res.send('Hello World!')
// })
// app.listen(port,()=>{
//     console.log(`Example app listening on port ${port}`);
// }); 
const express = require("express");
const port = 3000;
const app = express();
app.get('/',function(req,res){
    res.send("Hello world!")
}) 
app.listen(port);