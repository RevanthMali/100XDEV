const express = require("express");
const app =express();

//fucntion returns a boolean if age is > 14 
// function isOldEnough(age){
//     if(age>=14){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
function isOldEnoughMiddleware(req,res,next){
     const age= req.query.age; 
    if(age>=14){
        next();
     }
     else{
        res.status(411).json({msg: "sorry you don't have that age!!"})
     }
}
app.use(isOldEnoughMiddleware)
app.get('/ride2',isOldEnoughMiddleware,function(req,res){
    
     res.json({msg: "you have successfully riden ride 2!"})
})
app.get('/ride1',isOldEnoughMiddleware,function(req,res){
    
    res.json({msg : "you have successfully riden ride 1!"})
})

app.listen(3000,()=>{
    console.log("server listening to port 3000")
})