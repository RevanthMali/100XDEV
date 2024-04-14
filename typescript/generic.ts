function identify<T>(arg:T):T{
    return arg;
} 
let op1 = identify<string>("mystring");
let op2 = identify<number>(100); 
console.log(op1);
console.log(op2);
