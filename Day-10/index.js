console.log("Day 10 JavaScript");

//Types of Scope
//1. Global Scope
//2. Function Scope
//3. Block Scope
//4. Module Scope

//Global Scope

let user_name = "Sanju"

function sayMyName(){
    console.log("Inside of func",user_name);
}

sayMyName();
console.log("Outside of func",user_name);

//Function Scope

function toDoList(){
    let task1 = "Complete the javascript course";
    console.log(task1);
}

toDoList();
// console.log(task1); // show error

//Block Scope
{
    var MyLastName = "Samson";
    console.log("Inside of Block Scope",MyLastName);
}

console.log("Outside of Block Scope",MyLastName); //We see output here because var is not a block scope it is a function scope

{
    let User_last_name = "Samson";
    console.log("Inside of Block Scope",User_last_name);
}

// console.log("Outside of Block Scope",User_last_name); //We see error here because let is a block scope


// Scope Chain
let globalVar = "I am a Global Variable";

function outer() {
    let outerVar = "I am an Outer Variable";

    function inner() {
        let innerVar = "I am an Inner Variable";

        console.log(innerVar); // "I am an Inner Variable"
        console.log(outerVar); // "I am an Outer Variable"
        console.log(globalVar); // "I am a Global Variable"
    }

    inner();
}

outer();

// console.log(outerVar); // Reference Error

// Variable Shadowing

let message = "I am doing great"

function situation() {
    let message = "I am not doing great"
    console.log(message); // I am not doing great
}

situation();
console.log(message); // I am doing great