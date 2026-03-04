//Hoisting using var

// console.log(myName); // Output: undefined
// var myName = "Tom";
// console.log(myName); // Output: "Tom"


//Hoisting using let
// console.log(myName); //output: error
// let myName = "Tom";
// console.log(myName); // Output: "Tom"

//Hoisting using const
// console.log(myName); //Output error
// const myName = "Tom";
// console.log(myName); // Output: "Tom"

//TDZ (Temporal Dead Zone)
// { //This is the starting poing

//     console.log("Hello");

//     let vari1 = 10; //This is the end the tdz gets terminated when the variable is decared in the block
//     console.log(vari1);

// }


//Function hoisting

// Invoke a function, chase()
// chase();

// // Declare a function, chase()
// function chase() {
//   console.log('Tom chases Jerry!');
//   // Invoke a function, caught();
//   caught();
// }

// // Declare a function, caught()
// function caught() {
//   console.log('Tom caught Jerry :(')
// }


//Function hoisting using arraow or Anonymous
test();

var test = function() {
  console.log('I am being tested');
}
