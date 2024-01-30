const express = require("express");
const app = express();
// Its a  fucntion that performs the user's authentication and validation
// app.get("/health-checkup",function(req,res){
//     const username =req.headers.username;
//     const password =  req.headers.password;
//     const kidneyId = req.query.kidneyId;
//     if(!(username == "revanth" && password== "Revanth@xyz")){
//         res.status(400).json({"msg":"Something went wrong!"}) 
//     }
//     if(kidneyId !=1 && kidneyId !=2){
//         res.status(400).json({"msg":"Something went wrong!"}) 
//     } 
//     res.json({ "msg" : "Your kidney is safe!!" });
// }); 
 

// By using the concept of Middlewares 
function userMiddlewares(req,res,next){
    //define the headers the for the validation 
    const username = req.headers.username;
    const password = req.headers.password;
    // next is a function which is being called after the validation of req and res
    if(!(username =="revanth" && password == "Revanth@xyz")){
        res.status(403).json({"msg" : "Wrong passwordd or Username!!"});
    }else{
        next(); 
    }
} 
function kidneyMiddleware(req,res,next){ 
    const kidneyId = req.query.kidneyId;
    if(kidneyId != 1 && kidneyId != 2){
        res.status(403).json({"msg" : "incorrect input!!"});
    }else{
        next();
    }
} 

// here we perform two checks usermiddleware(user authentication) and kidneymiddleware (checks kidney count)
// if both checks are passed function is executed
app.get("/health-checkup",userMiddlewares,kidneyMiddleware,function(req,res){
 
    res.send("your kidney is fine!!")
}); 
app.get("/kidney-check",userMiddlewares,kidneyMiddleware,function(req,res){
 
    res.send("your kidney is fine!!")
});
 
app .listen(3000);
