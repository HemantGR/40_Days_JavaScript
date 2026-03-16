"use strict";
console.log("Day 13 JavaScript");

// this keyword and window object
console.log("this at the global", this); // window
console.log(this === window);

//Implicit Binding
let obj1 = {
    emp_id:11789,
    emp_name: "Hemant",
    position: "Developer",

    returnThis: function(){
        return this;
    },

    getDetails: function(){
        console.log(`Employee id: ${this.emp_id}, Employee name: ${this.emp_name}, Position: ${this.position}`);
    }
}

console.log(obj1.returnThis());
obj1.getDetails();

const tom = {
    name: "Tom",
    age: 7
}

const jerry = {
    name: 'jerry',
    age: 3
}

function greetMe(obj){
     obj.logMessage = function() {
        console.log(`${this.name} is ${this.age} years old!`)
    }

    console.log(obj);
}

greetMe(tom);
greetMe(jerry);

tom.logMessage();
jerry.logMessage();


//Inside a func
function sayName(){
    console.log(this);
}

sayName();

function outer(a) {
    console.log("this inside an outer function", this);

    return function inner(b) {
        console.log("this inside an inner function", this);
    }
}
const outerResult = outer(5);
outerResult(3);

const food  = () =>{
    console.log(this);
}

food();

const food2 = {
    name: "mango",
    color: "yellow",
    
    // BAD: getDesc: () => `${this.name} is ${this.color}` -> 'this' is window
    // GOOD: Normal method
    getDesc: function() {
        // Arrow function inherits 'this' from getDesc (which points to 'food')
        return () => `${this.name} is ${this.color}`; 
    }
}
const descFunc = food2.getDesc();
console.log(descFunc()); // Output: "mango is yellow"

//Explict Binding

//call and apply

const likes = function(hobby1, hobby2){
    console.log(`${this.name} likes ${hobby1} and ${hobby2}`);
}

const person = {name: "Hemant"};

likes.call(person,"Gaming","Learning"); 
likes.apply(person,["Gaming","Learning"]);

const officer = { name: 'Bob' };
// Returns a NEW function, permanently locked to 'officer'
const newFn = newHobbies.bind(officer, "Dancing", "Singing"); 
newFn(); // Executes later!