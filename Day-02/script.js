console.log("Welcome to Day-02");

//Variable using var

/*
var a = "John";
console.log(a);

var a = "James";
console.log(a);
*/

//Variable using let

let a = "Rohan";
console.log(a);
// let a = "Varun" // This will give error

a = "Varun";
console.log(a);

//Variable using const
const c = 90;
console.log(c);

// c = 89; //This will give error as you cannot change the value of a constant variable
// console.log(c)

/*
- **Primitive Data Types:**
    - `String` - Text values ("Hello")
    - `Number` - Numeric values (25, 3.14)
    - `Boolean` - True/False (true, false)
    - `Undefined` - A variable declared but not assigned (let x;)
    - `Null` - Represents "nothing" (let y = null;)
    - `BigInt` - Large numbers (BigInt(12345678901234567890))
    - `Symbol` - Unique identifiers (Symbol("id"))
- **Non-Primitive (Reference) Data Types:**
    - `Object` - Collection of key-value pairs
    - `Array` - Ordered list of values
    - `Function` - Code that can be executed
*/

let obj1 = {
    name:"Karan",
    age:21,
    isStudent:true
}

console.log(obj1);

let a1 = 10;
let b1 = a1; // 10
b1 = 20; // 20
console.log(a1); // 10 (original remains unchanged)