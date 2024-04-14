"use strict";
var direction;
(function (direction) {
    direction[direction["up"] = 1] = "up";
    direction[direction["down"] = 2] = "down";
    direction[direction["right"] = 3] = "right";
    direction[direction["left"] = 4] = "left";
})(direction || (direction = {}));
function doSomething(keyPressed) {
    if (keyPressed == direction.right) {
    }
}
doSomething(direction.down);
doSomething(direction.right);
console.log(doSomething(direction.right));
console.log(doSomething(direction.left));
