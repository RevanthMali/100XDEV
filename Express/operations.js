const express = require("express"); 
const app = express(); 
// function CalculateSum(n){
//     let ans= 0;
//     for(let i =1;i<=n;i++){
//         ans += i;
//     }
//     return ans;
// } 
// app.get("/",function(req,res){
//     const n = req.query.n;
//     const ans = CalculateSum(n);
//     res.send("Hi your answer is:"+ans); 
//     // res.send("Hi there")
// });
  
const users = [{
    name: "jhon",
    kidneys:[{
        healthy: false
    }]
}]
app.use(express.json());
app.get("/",function(req,res){
    const Jhonkidneys = users[0].kidneys;
    const noOfKidneys = Jhonkidneys.length;
     let numberofHealthyKidneys = 0;
     for(let i= 0;i<noOfKidneys;i++){
        if(Jhonkidneys[i].healthy){
            numberofHealthyKidneys = numberofHealthyKidneys +1;
        }
     } 
     const unhealthyKidneys = noOfKidneys - numberofHealthyKidneys;
    res.json({noOfKidneys,numberofHealthyKidneys,unhealthyKidneys});
}) 
app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg:"Done!!"
    })
})
app.put("/",function(req,res){
     for(let i =0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
     }
     res.json({});
}) 
// removes unhealthy kidneys
app.delete("/",function(req,res){
     // if atleast ono unhealthy should be present 
     // if no unhealthy kidney is present return 411 status code
   if(isthereAtleastOneUnhealthyKidney()){
     let newkidneys = [];
    for(let i =0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newkidneys.push({
                healthy:true
            })
        }
    }
    users[0].kidneys = newkidneys;
     res.json({msg: "done!!"});
    }else{
        res.status(411).json({
            msg: "You have no bad kidneys!!"
        });
    }   
}) 
function isthereAtleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney = false;
     for(let i =0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
     }
}
app.listen(3000);
