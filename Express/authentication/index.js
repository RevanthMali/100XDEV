const mongoose =require("mongoose");
const express = require("express");
const app = express();

app.use(express.json());
// connection url found from mongoDB compass
mongoose.connect("mongodb+srv://malirevanth:Revanth123@cluster1.ntjqroi.mongodb.net/"); 
//mongoose checks the schema before proceeding further
 const User = mongoose.model('Users',{name: String,email: String,password: String});
// perform a post operation to add the user to the database as signed UP user
 app.post("/signup",async function(req,res){
    // gets these parameters from postman
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name; 
    // findOne function generally checks the user is existing in the database or not
    const existingUser =await User.findOne({email: username});
    if(existingUser){ 
        return res.status(400).send("Username already exists!!");
    } 
    // if not existing create a new user
    const user = new User({
        name: name,
        email : username,
        password: password
    });
    // this asve function saves the user info in mongoDB
        user.save(); 
    // Display the info the user that a new user was created
        res.json({
            "msg" : "user created Successfully"
        });
}); 

 