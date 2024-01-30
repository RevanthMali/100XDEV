function sum(num1,num2,f1){
   let result =  num1+num2; 
    f1(result);
} 
function displayResult(data){
    console.log("result: ",data);
} 
function displayPassiveResult(data){
    console.log("passsive data",data);
}  
const res = sum(1,4,displayResult);
