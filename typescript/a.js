"use strict";
// const x: number = 10;
// console.log(x); 
;
function isLegal(user) {
    if (user.age > 18)
        return true;
    else
        return false;
}
function greet(user) {
    console.log("hi" + user.firstName);
}
isLegal({ firstName: "revanth", lastName: "reddy", age: 20 });
greet({ firstName: "revanth", lastName: "reddy", age: 20 });
