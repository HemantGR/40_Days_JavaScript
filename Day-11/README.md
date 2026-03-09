# 📦 Day 11: Closures in JavaScript

### 📚 Prerequisites

To fully grasp closures, you must first understand:

1. **Inner & Outer Functions:** A function defined inside another function.
2. **Nested Scope Rule:** An inner function always has access to variables defined in its outer (parent) function, but the parent cannot access the child's variables.
3. **Lexical Scope:** JavaScript determines scope based on where the function was **written** physically in the code.

---

### 1. What is a Closure?

#### The Layman's Definition

> A **Closure** is an inner function that can remember the variables from its outer function even **after** the outer function has finished executing.

#### The Technical Definition

> A **Closure** is the combination of a function bundled together (enclosed) with references to its surrounding state (the **lexical environment**). In JavaScript, closures are created every time a function is created, at function creation time.

#### Basic Code Example (How a Closure is Born)

```javascript
function outer() {
    let x = 10; // Variable in outer scope

    function inner() {
        // Inner function accesses x (lexical scope rule)
        console.log(x); 
    }

    // CRUCIAL PART: Return the function instead of executing it
    return inner; 
}

// 1. Execute outer. It sets x=10, defines inner, and returns inner.
// After this line, 'outer' is DONE. Its execution context is gone.
const myFunk = outer(); 

console.log(myFunk); // myFunk is now the 'inner' function definition

// 2. Execute myFunk.
// How does it know x=10? outer is gone!
myFunk(); // Output: 10

```

**How it works:**
The returned `inner` function doesn't just get copied; it gets returned with a "backpack" attached. Inside that backpack are references to all the variables that existed in its environment when it was born (`x = 10`). This backpack is the **Closure**.

---

### 2. State & Memory (The Counter Example)

Closures are not just for reading data; they are essential for **maintaining state across multiple function calls** without polluting the global scope.

```javascript
function createCounter() {
    let count = 0; // The state we want to protect

    return function() { // The closure
        count++; // Increments the private count
        console.log("Current Count:", count);
    };
}

// Create an instance of the closure
const counter1 = createCounter(); 

// outer (createCounter) is finished, but counter1 remembers 'count'

counter1(); // Output: Current Count: 1
counter1(); // Output: Current Count: 2
counter1(); // Output: Current Count: 3

// Create a SEPARATE instance. It gets its own backpack!
const counter2 = createCounter();
counter2(); // Output: Current Count: 1
counter1(); // Output: Current Count: 4 (Original maintains its own state)

```

**Key Takeaway:** The closure closes on the reference to the variable, not just its value at the moment of creation. It remembers and updates the same variable in memory across calls.

---

### 3. Real-World Use Cases

#### A. Data Encapsulation (Private Variables)

In languages like Java or C#, you have "private" variables. JavaScript doesn't have them natively in standard objects yet, but we can simulate them perfectly using closures. We expose the *functionality* but hide the *data*.

**Example: Simulating a Bank Account ATM**

```javascript
function createBankAccount(initialBalance) {
    let balance = initialBalance; // Hiddem private variable

    // Return an object containing several closures
    return {
        deposit: function(amount) {
            balance = balance + amount;
            console.log(`Deposited $${amount}. New balance: $${balance}`);
        },
        withdraw: function(amount) {
            if (amount > balance) {
                console.warn("Insufficient funds!");
            } else {
                balance = balance - amount;
                console.log(`Withdrew $${amount}. New balance: $${balance}`);
            }
        },
        checkBalance: function() {
            // Expose a read-only view of the data
            console.log(`Current Balance: $${balance}`);
        }
    };
}

// Account setup (outer function runs once)
const myAccount = createBankAccount(100);

myAccount.deposit(300); // Back-end state updates to 400
myAccount.withdraw(700); // Condition logic runs based on hidden state (fails)
myAccount.withdraw(50);  // Back-end state updates to 350
myAccount.checkBalance(); // Final output: $350

// IMPORTANT: Consumer CANNOT access or change balance directly!
console.log(myAccount.balance); // Output: undefined (Because balance is hidden in the closure)

```

#### B. Event Handlers & Dom Manipulation

```javascript
// Function that sets up a button's logic
function setupButton(buttonId) {
    let clickCount = 0; // State associated only with this button
    const btn = document.getElementById(buttonId);

    // This callback function is a CLOSURE.
    btn.addEventListener('click', function() {
        clickCount++;
        btn.innerText = `Clicked ${clickCount} times`;
        console.log(`Button ${buttonId} clicked.`);
    });
}

// SETUP PHASE: The function setupButton finishes here.
// But the event listener is registered...
setupButton('myButton');

// ...Hours later when the user clicks, the callback runs...
// ...and it still remembers its own 'clickCount'!

```

---

### 4. Pros & Cons Summary

| Advantages of Closures | Disadvantages (Pitfalls) to Avoid |
| --- | --- |
| **Data Privacy (Encapsulation):** Protect variables from external access/manipulation. | **Memory Consumption:** Closures hold references to variables in memory. They prevent the Garbage Collector from cleaning up parent functions. |
| **State Persistence:** Maintain data across multiple asynchronous calls or events. | **Memory Leaks:** If you create many closures that reference huge amounts of data unnecessarily (and never release the reference), you can leak memory. |
| **Function Factories:** Create highly reusable functions tailored to specific data. |  |
| **Stop Variable Pollution:** Avoid using global variables to track state. |  |

**Advice on Memory:** Use closures when they provide a clear benefit (like Encapsulation or State), but don't use them everywhere by default. If you need to "free up" memory held by a closure, you can manually set the reference variable that holds the closure to `null` when you're done with it.
