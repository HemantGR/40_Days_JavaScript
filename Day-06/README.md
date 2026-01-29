# Day 6: Functions & Execution

### 1. What is a Function?

* **Definition:** A reusable block of code designed to perform a specific task.
* **Purpose:**
* **DRY Principle (Don't Repeat Yourself):** Write code once, use it everywhere.
* **Modularity:** Break complex problems into smaller, manageable pieces.
* **Mapping:** Takes an input (Parameters), processes it, and returns an output.



---

### 2. Defining and Calling Functions

#### A. Function Declaration (The Standard Way)

```javascript
function greet() {
    console.log("Hello World");
}
// Invoking (Calling) the function
greet(); 

```

#### B. Function Expression

Assigning a function to a variable. The function acts as a value.

```javascript
const greetUser = function() {
    console.log("Hello User");
};
greetUser();

```

---

### 3. Parameters vs. Arguments

* **Parameters:** Variables listed in the function definition (Placeholders).
* **Arguments:** The actual values passed when calling the function.

```javascript
// name and age are PARAMETERS
function printInfo(name, age) {
    console.log(name + " is " + age + " years old.");
}

// "Alice" and 25 are ARGUMENTS
printInfo("Alice", 25);

```

#### Default Parameters

Set a fallback value if the user doesn't provide an argument.

```javascript
function add(a, b = 0) { // b defaults to 0 if missing
    return a + b;
}
console.log(add(5)); // Output: 5 (5 + 0)

```

#### Rest Parameters (`...`)

Handle an unknown number of arguments by gathering them into an array.

* **Rule:** Must be the **last** parameter.

```javascript
function sumAll(...numbers) {
    // numbers is now an array: [1, 2, 3, 4]
    console.log(numbers);
}
sumAll(1, 2, 3, 4);

```

---

### 4. The `return` Statement

* **Purpose:** Stops function execution and sends a value back to where the function was called.
* **Rule:** Code written *after* `return` will **never** execute.
* **Formatting:** Never put a newline immediately after `return` (JavaScript will auto-insert a semicolon and return `undefined`).

```javascript
function multiply(x) {
    return x * 2;
    console.log("This will never print"); // Dead code
}
let result = multiply(5); // result holds 10

```

---

### 5. Advanced Function Types

#### A. Arrow Functions (ES6)

A shorter syntax for writing functions.

```javascript
// Standard syntax
const add = (a, b) => {
    return a + b;
};

// Implicit Return (One-liner) - No curly braces or 'return' keyword needed
const multiply = (a, b) => a * b;

// Single Parameter (Parentheses optional)
const square = x => x * x;

```

#### B. Callback Functions

A function passed as an argument to another function, to be executed later.

```javascript
function processUser(callback) {
    console.log("Processing...");
    callback(); // Calling the passed function
}

processUser(() => console.log("Done!"));

```

#### C. Higher-Order Functions (HOF)

A function that either:

1. Takes another function as an argument (like `processUser` above).
2. Returns a function.

#### D. IIFE (Immediately Invoked Function Expression)

A function that runs as soon as it is defined. Useful for initialization code.

```javascript
(function() {
    console.log("I run immediately!");
})();

```

---

### 6. The Call Stack

How JavaScript tracks function execution.

* **Structure:** **LIFO (Last In, First Out)**.
* **Process:**
1. When a function is called, it is **pushed** onto the stack.
2. When it finishes (returns), it is **popped** off the stack.
3. If `Function A` calls `Function B`, `A` pauses, `B` goes on top, `B` finishes, then `A` resumes.



---

### 7. Recursion

A function calling itself.

* **Risk:** **Stack Overflow** (Infinite loop crashes the Call Stack).
* **Solution:** Must have a **Base Condition** (Exit Criteria) to stop calling itself.

```javascript
function countdown(num) {
    // 1. Base Condition (Exit Criteria)
    if (num === 0) {
        console.log("Done!");
        return;
    }
    
    // 2. Logic
    console.log(num);
    
    // 3. Recursive Call
    countdown(num - 1);
}
countdown(5);

```

---

### 8. Pure Functions & Side Effects

* **Pure Function:**
1. Always returns the **same output** for the **same input**.
2. Has **no side effects** (doesn't modify external variables, fetch data, or change the DOM).


* **Impure Function:** Depends on external state or modifies something outside itself.

---

### 📝 Day 6 Assignment
## 1. Write a Function to Convert Celsius to Fahrenheit
Create a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit.
Formula: (Celsius * 9/5) + 32 = Fahrenheit

## 2. Create a Function to Find the Maximum of Two Numbers
Write a function findMax(num1, num2) that returns the larger of the two numbers. It should work for negative numbers as well.

## 3. Function to Check if a String is a Palindrome
Create a function isPalindrome(str) that checks if a given string is a palindrome (reads the same forward and backward). You can not use any string function that we have not learned in the series so far.

## 4. Write a Function to Find Factorial of a Number
Create a function factorial(n) that returns the factorial of n.
Example 5! = 5 * 4 * 3 * 2 * 1

## 5. Write a function to Count Vowels in a String
Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string.

## 6. Write a Function to Capitalize the First Letter of Each Word in a Sentence
Write a function capitalizeWords(sentence) that takes a sentence and capitalizes the first letter of each word. You can use the toUpperCase() method of string to convert the lowercase to uppercase.

## 7. Use an IIFE to Print “Hello, JavaScript!”
Write an IIFE that prints "Hello, JavaScript!" to the console. Here the Second word must be supplied using paramneter and argument.

## 8. Create a Simple Callback Function
Write a function greet(name, callback), where callback prints a message using the name parameter.

## 9. Create Call Stack Execution Diagram for this flow

```js
function f1() {}
function f2() {
    f1();
}
f2();
```

## 10. Create Call Stack Execution Diagram for this flow

```js
function f1() {}
function f2() {}
function f3() {
    f1();
}
f2();
f3();
f1();
```