# 🛑 Day 14: Error Handling in JavaScript

### 1. Types of Errors in JavaScript
There are two main categories of errors you will encounter:

1.  **Parsing Errors (Syntax Errors):** The grammar of your code is broken (e.g., a missing bracket). JavaScript cannot understand or run the script at all. You must fix the code manually.
2.  **Runtime Errors (Exceptions):** The syntax is correct, but something goes wrong while the program is running (e.g., trying to read data from a server that returned `null`). **This is what we handle using `try...catch`.**

#### Common Built-in Runtime Errors
* **`ReferenceError`:** Accessing a variable that doesn't exist. (`console.log(x);`)
* **`TypeError`:** Performing an operation on the wrong data type. (`let obj = null; console.log(obj.name);`)
* **`RangeError`:** Passing a value outside an acceptable range. (`new Array(-1);`)
* **`URIError`:** Misusing URI handling functions.
* **`EvalError`:** Errors executing code via the `eval()` function (Avoid using `eval!`).

---

### 2. The `try...catch` Block
The `try...catch` statement is your safety net. It allows you to "try" running risky code and "catch" the error gracefully if it fails, preventing the app from crashing.

#### The Execution Flow
1.  Code inside the `try` block executes line by line.
2.  **If no error occurs:** The `catch` block is completely ignored.
3.  **If an error occurs:** Execution inside the `try` block stops immediately. Control jumps straight to the `catch` block, passing an `error` object containing the details.

#### The Error Object
When an error is caught, the `err` object provides three crucial properties:
* `err.name`: The type of error (e.g., "ReferenceError").
* `err.message`: A human-readable description of what went wrong.
* `err.stack`: The call stack (the sequence of function calls that led to the error). This is your best friend for debugging!

```javascript
try {
    console.log("Execution starts here");
    abc; // 'abc' is not defined, triggers an error
    console.log("Execution ends here"); // This line NEVER runs
} catch (err) {
    console.error("An Error has occurred");
    console.log(err.name);    // "ReferenceError"
    console.log(err.message); // "abc is not defined"
    console.log(err.stack);   // Shows the exact line number where it failed
}
```

---

### 3. Throwing Custom Errors (`throw`)
Sometimes, JavaScript doesn't think an operation is an error, but your *business logic* does. For example, `15 / 0` in JavaScript returns `Infinity` instead of crashing. We can use the `throw` keyword to manually trigger an error.

```javascript
function divideNumbers(a, b) {
    try {
        if (b === 0) {
            // Manually trigger an exception and jump to catch
            throw new Error("Division by zero is not allowed."); 
        }
        const result = a / b;
        console.log(`The result is ${result}`);
    } catch(error) {
        console.error("Got a Math Error:", error.message);
    }
}
divideNumbers(15, 0); // Output: Got a Math Error: Division by zero is not allowed.
```

---

### 4. Rethrowing Errors
Sometimes, a low-level function shouldn't be the one showing error messages to the user. Instead, it should catch the error, log it for developers, and **rethrow** it up the chain to a higher-level function (like the UI layer).

*Note: When rethrowing an existing error, just use `throw error;` (No `new` keyword).*

```javascript
// Low-level function
function validateForm(formData) {
    try {
        if (!formData.username) throw new Error("Username is Mandatory");
        if (!formData.email.includes("@")) throw new Error("Invalid email format!");
    } catch (error) {
        console.error("Developer Log - Validation Issues Found:", error.message);
        throw error; // RETHROW: Send it up the chain!
    }
}

// High-level function (e.g., UI Layer)
try {
    validateForm({ username: "Tapas", email: "bademail" });
} catch(error) {
    // This is what the actual User sees in a toast/popup
    console.error("Showing error message to user:", error.message); 
}
```

---

### 5. The `finally` Block
The `finally` block is attached to the end of a `try...catch`.
* **The Rule:** Code inside `finally` will **ALWAYS** run, regardless of whether an error occurred or not.
* **Use Case:** Cleanup actions! (e.g., Closing database connections, hiding UI loading spinners, closing files).

```javascript
function processInformation(information) {
    try {
        if (!information) throw new Error("No Information available");
        console.log("Information processed");
    } catch (error) {
        console.log("Error:", error.message);
    } finally {
        console.log("Cleanup: Closing database connection"); // Runs every time
    }
}
```

---

### 6. Creating Custom Error Constructors
For complex apps, generic `Error` objects aren't enough. You can create your own custom Error types to standardize your application's error handling.

```javascript
// 1. Create the Custom Constructor
function ValidationError(message) {
    this.name = "ValidationError";
    this.message = message;
    
    // Advanced: Link the stack trace to the native Error object
    // this.stack = new Error().stack; 
}

// 2. Use it in your code
function validateCitizen(age) {
    if (age < 60) {
        throw new ValidationError("You are not a senior citizen");
    }
    return "You are a senior citizen";
}

try {
    const message = validateCitizen(15);
} catch (error) {
    console.error(`${error.name}: ${error.message}`); 
    // Output: ValidationError: You are not a senior citizen
}
```

---

### 7. A Note on the Self-Assignment Operator (`?=`)
You might see tutorials talking about a new operator `?=` meant to replace `try...catch`. 
* **How it looks:** `x ?= 20;` (Assigns 20 only if `x` is undefined/null).
* **The Reality Check:** This is currently just a *proposal* in JavaScript. Do **not** use it as a shortcut to avoid learning `try...catch`. Production environments and legacy codebases rely heavily on traditional error handling.