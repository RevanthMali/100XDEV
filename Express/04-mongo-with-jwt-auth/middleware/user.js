const {JWT_SECRET} = require("../config");
const jwt = require("jsonwebtoken");
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
        const token = req.headers.authorization;
        const words = token.split(" ");
        const jwtToken = words[1];
        try {
            const decodedValue = jwtToken.verify(jwtToken,JWT_SECRET);
            if(decodedValue.username){
                req.username = decodedValue.username;
                req.randomData = "Adsadsadsadssd";
                next();
            }
            else{
                res.status(403).json({msg : "You are not Authenticated"})
            }
        } catch (error) {
            res.json({msg : "INCORRECT INPUTS"});
        }
}

module.exports = userMiddleware;