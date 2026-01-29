console.log("Day-06 JavaScript");

//declare a function

function printThis(){
    console.log("printing....");
}

//invoke a function
printThis();

//function as a expression
let printMe = function(){
    console.log("Print Me");
}

printMe();

//parameter and arguments
function userInfo(name,age){ //These are parameter
    console.log("Your name is",name,"and age is",age);
}

userInfo("Tapa",21); //These are arguments

//return statement
function double(x){
    return x**2;
}

const res = double(2); //either you can store the return in a variable
console.log(res);

console.log(double(3)) // or just print it in on console

//Default parameter
function clac(a=0,b=0){
    return (2 * (a + b));
}

console.log(clac(2,3)) //10
console.log(clac(3)) //6

//Rest parameter
function printAnyNum(...numbers){
    console.log(numbers);
}

printAnyNum(1,2,3,4,2,5,6)

// Nested Fucntion

function outer() {
    console.log("Outer");

    return function inner() {
        console.log("inner");
    }
}

let retFunc = outer();

console.log(retFunc());


//callback function
function foo(func){
    console.log("This is a normal function with a calling other function");
    func();
}

let otherfoo = function(){
    console.log("Hello I'm other function");
}

foo(otherfoo);

// Pure function
let greeetingMsg = "Hola "

function greeting(name) {
    return greeetingMsg + name;
}

console.log(greeting("tapaScript"));
console.log(greeting("tapaScript"));

greeetingMsg = "Namaste "

console.log(greeting("tapaScript"));
console.log(greeting("tapaScript"));
console.log(greeting("tapaScript"));

//Higher order function
function getCamera(camera) {
    camera();
}

getCamera(function() {
    console.log("Sony")
})

function returnFunc(param) {
    return function() {
        if (param === 1) {
            console.log("Hello")
        }

    }
}

const retFun = returnFunc(1);
retFun();

//Arrow function
let greets = (greeetingMsg) => {
    console.log(greeetingMsg + " JavaScript");
}

greets("Namaste");

//Recursion
function fetchWater(count) {
    console.log("Fetching Water...", count);
    if (count === 0) {
        console.log("No more water is left to fetch...");
        return;
    }
    fetchWater(count - 1)
}

fetchWater(5)