// Task - 01

let user = "Alice";

function outer() {
    function inner() {
        console.log(user);
    }
    let user = "Bob";
    inner();
}

outer();

// Output - Bob
//JavaScript uses lexical scope, which means a function checks for variables in its own scope and then in the outer scope where it was created. The inner() function is inside outer(), so it first looks for user in outer(). Inside outer() there is let user = "Bob", so it uses that value instead of the global "Alice". Therefore, it prints Bob.

//Task-02
let total = 0; // Global, bad practice

function add(num) {
    total += num;
}

add(5);
add(10);
console.log(total);

// Answer: total is declared at global so if something is define in global it can be acessed anywhere in the file which will create problems.

//Task-03

function Parent(){
    let first_name = "Kabir";
    function Child(){
        console.log(first_name);
    }
    Child();
}

Parent();


//Task-04

for(let i = 0; i < 5; i++){
    console.log(i);
}
// console.log(i) //using let we will not be able to access it but if we create it with var then yes we can access as var is a function scope not a block scope

//Task-05
function fn(){
    let a = 10;
    fn2(a);

}
function fn2(val){
    console.log(val)

}
fn();

//Task-06

// console.log(a);
// let a = 10;

//This will show Error because 'a' is in Temporal Dead Zone (hoisted but not initialized)

// Task - 07
function showAge() {
    let age = 25;
    console.log(age);
}

// console.log(age);

// Answer B  Only inside showAge

//Task-08
let message = "Hello";

function outer() {
    let message = "Hi";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();

//Answer: Hi because the nearest to the function which has the value is inside of the outer function so it will print "Hi"

//Task 09
let x = "Global";

function outer() {
    let x = "Outer";

    function inner() {
        let x = "Inner";
        console.log(x);
    }

    inner();
}

outer();

//Answer Inner as the function inner has alreadt the value of x so according to the scope it already has the value once it gets the value it will show that value and will not look for another value

//Task - 10
function counter() {
    let count = 0;
    return function () {
        count--;
        console.log(count);
    };
}

const reduce = counter();
reduce(); //-1
reduce(); // -2 

// Answer The inner function remembers the 'count' variable even after counter() finishes, so each call decrements the same count