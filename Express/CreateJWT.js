// const express = require("express");
const jwt = require("jsonwebtoken")
// const app = express();
const value = {
    name: "Revanth",
    accountNumber:123123
}

// to create the token  'SIGN' method is used
// secret is used to verify the token by the backend
const token = jwt.sign(value,"secret");
console.log(token);
// to verify the token 'verify' method is used

// app.listen(3000,()=>{
//     console.log("server started")
// })