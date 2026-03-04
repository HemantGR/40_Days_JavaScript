// Task-01
// The Temporal Dead Zone (TDZ) refers to the period between the entering
// of a scope and the actual declaration of a `let` or `const` variable.
// For `var`, there is no TDZ (only hoisting with `undefined`).

{
    // TDZ using var (NO TDZ for var)
    console.log(day1);   // undefined (hoisted, but not yet assigned)
    var day1 = "Monday";
    console.log(day1);   // "Monday"

    // TDZ using let
    console.log(day2);   // ReferenceError: Cannot access 'day2' before initialization
    let day2 = "Tuesday";
    console.log(day2);   // "Tuesday"

    // TDZ using const
    console.log(day3);   // ReferenceError: Cannot access 'day3' before initialization
    const day3 = "Wednesday";
    console.log(day3);   // "Wednesday"
}

//Task - 02

// 1. Variable hoisting with `var`
console.log(Myname); // undefined (not error: declaration is hoisted)
var Myname = "John";
console.log(Myname); // "Hemant"


// 2. Variable hoisting with `let` and `const`
// console.log(age); // ReferenceError: Cannot access 'age' before initialization
let age = 21;

// let / const are also hoisted, but in the Temporal Dead Zone (TDZ)
// until the actual declaration line.

// 3. Function declaration
sayMyName(); // "Hello!" → works even before declaration

function sayMyName() {
    console.log("Hisenberg!");
}

// Function declarations are hoisted with their full body,
// so you can call them before the function line.

