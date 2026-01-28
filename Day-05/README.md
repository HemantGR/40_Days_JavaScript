Here are the structured study notes for **Day 5 of the 40 Days of JavaScript Journey**.

---

# 🔄 Day 5: Loops and Iterations

### 🎯 Goal

To master **Logic Building** by automating repetitive tasks.

* **Definition:** A Loop allows you to execute a block of code multiple times without writing the code repeatedly.
* **Analogy:** Going to the market to buy potatoes 5 times. Instead of writing "Go to market" 5 times, you tell the program "Do this 5 times."

---

### 1. The Three Types of Loops

Deciding which loop to use is the first step in logic building.

| Loop Type | When to use it? | Key Characteristic |
| --- | --- | --- |
| **For Loop** | When you know **exactly** how many times to loop. | Fixed number of iterations (e.g., "Run 5 times"). |
| **While Loop** | When you **don't know** the number of iterations in advance. | Runs as long as a condition is true (e.g., "Run until user types 'Stop'"). |
| **Do-While Loop** | When the code must run **at least once**. | Executes first, *then* checks the condition. |

---

### 2. The `for` Loop

Best used for fixed iterations.

**Syntax:**

```javascript
for (initialization; condition; update) {
    // Code to execute
}

```

1. **Initialization:** Where to start (e.g., `let i = 1`).
2. **Condition:** How long to run (e.g., `i <= 5`). If true, the code runs.
3. **Update:** How to move forward (e.g., `i++`).

**Example 1: Basic Counting (1 to 5)**

```javascript
for (let count = 1; count <= 5; count++) {
    console.log("Iteration: " + count);
}

```

**Example 2: Logic Building (Sum of Even Numbers 1-100)**
Here, we combine a Loop with an `if` condition.

```javascript
let sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) { // Check if even
        sum = sum + i; // Add to sum
    }
}
console.log("Sum is: " + sum); // Output: 2550

```

**Example 3: Iterating a String**

```javascript
let language = "JavaScript";
for (let i = 0; i < language.length; i++) {
    console.log(language.charAt(i)); // Prints J, a, v, a...
}

```

---

### 3. Nested Loops

A loop inside another loop. Used for multi-dimensional data (like tables, matrices, or grids).

**Logic:** For every **one** iteration of the outer loop, the inner loop completes **all** its iterations.

```javascript
for (let i = 1; i <= 3; i++) {       // Outer Loop (Rows)
    for (let j = 1; j <= 3; j++) {   // Inner Loop (Columns)
        console.log(`Row: ${i}, Col: ${j}`);
    }
}

```

* *Output:* (1,1), (1,2), (1,3) -> then i becomes 2 -> (2,1), (2,2), (2,3)...

**Advanced: Multiple Counters**
You can initialize multiple variables in a single loop.

```javascript
// i goes up (1 to 10), j goes down (10 to 1)
for (let i = 1, j = 10; i <= 10 && j >= 1; i++, j--) {
    console.log(i, j);
}

```

---

### 4. Control Statements: Break vs. Continue

* **`break`**: **Terminates** the loop immediately. No further iterations will happen.
* *Use Case:* You found what you were looking for; stop searching.


* **`continue`**: **Skips** the current iteration and jumps to the next one.
* *Use Case:* Skip specific values (e.g., Print 1-5 but skip 3).



**Example:**

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // Skips 3, prints 1, 2, 4, 5
        // break; // Would stop at 2
    }
    console.log(i);
}

```

---

### 5. `while` vs `do...while` Loop

**The `while` Loop (Entry Controlled)**
Checks condition *before* executing.

```javascript
let count = 1;
while (count <= 5) {
    console.log(count);
    count++;
}

```

**The `do...while` Loop (Exit Controlled)**
Executes code *first*, then checks condition. Guaranteed to run at least once.

```javascript
let number = 1;
do {
    console.log(number);
    number++;
} while (number <= 5);

```

---

### 6. ⚠️ The Infinite Loop

A loop that never stops because the exit condition is never met (e.g., `while(true)` or forgetting `i++`).

* **Consequence:** Freezes the browser/program and consumes high CPU.
* **Advice:** Always ensure your logic has a reachable exit condition.

---

# Tasks

## 1. Generate a Pyramid Pattern using Nested Loop as it is shown below:

```bash
*
* *
* * *
* * * *
* * * * *
```

## 2. Craete Multiplication Table (Using for loop)
Write a program to print the multiplication table of a given number up to 10.
For Example: If N = 3, output should be:

```bash
3 x 1 = 3
3 x 2 = 6
...
3 x 10 = 30
```

## 3. Find the summation of all odd numbers between 1 to 500 and print them on the console log.

## 4. Skipping Multiples of 3
Write a program to print numbers from 1 to 20, but skip multiples of 3.

## 5. Reverse Digits of a Number (Using while loop)
Write a program to reverse the digits of a given number using a while loop.

Example:

```bash
Input: 6789
Output: 9876
```

## 6. Write your understanding on the difefrences between for, while, and do-while loop. Create their flow charts.