Here are the structured study notes for **Day 9 of the 40 Days of JavaScript Journey**.

---

# 🚀 Day 9: Hoisting & The Temporal Dead Zone (TDZ)

---

### 1. What is Hoisting?

* **The Myth:** JavaScript physically moves function and variable declarations to the top of your code before executing it.
* **The Reality:** JavaScript **does not move any code**.
* **Technical Definition:** Hoisting is a result of the **Creation Phase** of an Execution Context. Before running any code line-by-line, the JS engine scans the code and allocates memory for variable and function declarations.

This behavior allows us to access functions and some variables before they are formally declared in the code.

---

### 2. Variable Hoisting (`var` vs. `let`/`const`)

Variables behave differently based on the keyword used to declare them.

#### A. Hoisting with `var`

When the JS engine encounters a `var` declaration during the Creation Phase:

1. Memory is allocated for the variable.
2. It is **automatically initialized with the value `undefined**`.

This means you can access a `var` variable before its declaration line without crashing, but its value will be `undefined`.

```javascript
console.log(name); // Output: undefined (NOT an error)
var name = "Tom";
console.log(name); // Output: "Tom"

```

#### B. Hoisting with `let` and `const`

When the JS engine encounters a `let` or `const` declaration during the Creation Phase:

1. Memory is allocated for the variable.
2. It is **NOT initialized** with any value.

Trying to access them before the code initializes them results in a **ReferenceError**.

```javascript
console.log(age); // Uncaught ReferenceError: Cannot access 'age' before initialization
let age = 25;

```

---

### 3. The Temporal Dead Zone (TDZ)

The TDZ is a direct consequence of how `let` and `const` are hoisted.

* **Definition:** A specific region of a program where a variable exists (memory is allocated) but cannot be accessed because it has not yet been initialized.
* **Start:** The TDZ begins at the start of the block `{}` where the variable is declared.
* **End:** The TDZ ends exactly when the JS engine executes the line of code that initializes the variable.

If you try to access a variable while it is in its TDZ, JavaScript throws a **ReferenceError**. This behavior forces developers to write cleaner, less error-prone code by declaring variables before use.

---

### 4. Function Hoisting


#### A. Function Declarations

Function declarations are fully hoisted.

1. Memory is allocated during the Creation Phase.
2. The **entire function body** is stored in memory.

This means you can successfully call a function declaration before it appears in the code.

```javascript
sayHello(); // Output: "Hello!"

function sayHello() {
    console.log("Hello!");
}

```

#### B. Function Expressions (Arrows & Anonymous)

Functions assigned to variables (expressions) follow the hoisting rules of the **variable**, not the function.

```javascript
// Example using 'var'
test(); // Uncaught TypeError: test is not a function

var test = function() {
    console.log("I am an expression.");
};

```

* **Why the Error?** In the Creation Phase, `var test` is initialized as `undefined`. When the Execution Phase tries to run `test()`, it's actually doing `undefined()`. `undefined` is not a function, hence the `TypeError`.
