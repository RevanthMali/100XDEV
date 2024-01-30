function findSum(n){
        let ans = 0;
        for(let i=0;i<n;i++){
            ans +=i;
        } 
        return ans;
} 
function findSumTill100(){
    console.log(findSum(10));
} 
setTimeout(findSumTill100,3000);
console.log("Hello world"); 
// const fs = require('fs');
// fs.readFile("fs.txt","utf-8",function(err,data){
//     console.log(data);
// })