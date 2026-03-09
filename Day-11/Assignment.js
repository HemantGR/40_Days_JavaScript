//Task - 01
//What will be the output of the following code and why?

function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter(); // 1
counter(); // 2

//sol the output will be 1 then in the next line 2 reason being closure the counter has outer inner function which has the reference of the outer variable through which it can store the value.

//Task-02
//What will be the output and why?

function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
console.log(testClosure()());

//sol the output will be 100, the testClouser has 2 parenthesis the first parenthesis call the outer function and the second parenthesis calls the inner function through IIFE ( Immediately Invoked Function Expression )

//Task-03
//Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.

const button = document.getElementById("button");
function setupButton(){
    let clickCount = 0;

    button.addEventListener("click", function() {
        clickCount++;
        console.log(`Button clicked ${clickCount} times`);
    })
}
setupButton();

//Task - 04
//Write a function createMultiplier(multiplier) that returns another function to multiply numbers.

function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}
const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15

//Task - 05
// What happens if a closure references an object?

// A. The object is garbage collected immediately
// B. The object remains in memory as long as the closure exists
// C. The object is automatically cloned
// D. None of the Above.

//Sol Option B The object remains in memory as long as the closure exists

