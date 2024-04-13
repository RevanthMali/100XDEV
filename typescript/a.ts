// const x: number = 10;
// console.log(x); 


// function sum(a: number,b:number): number{
//     return a+b;
// } 
// console.log(sum(10,30)); 


// function isLegal(age:number):boolean{
//     if(age>18){
//         return true;
//     }
//     else{
//         return false;
//     }
// } 
// console.log(isLegal(20)); 

//passing a function as an argument

// function runAfter1s(fn: ()=>void){
//     setTimeout(fn, 1000);
// } 
// runAfter1s(function(){
//     console.log("Hello world");
// });



// interfaces 

interface User{
    firstName: string,
    lastName: string,
    age:number
};
function isLegal(user:User){
    if(user.age>18)
        return true;
    else
     return false;
}
function greet(user:User){
    console.log("hi" + user.firstName);
}
isLegal({firstName:"revanth",lastName:"reddy", age:20});
greet({firstName:"revanth",lastName:"reddy", age:20});