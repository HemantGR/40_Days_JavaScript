# Day 4: Control Flow (Logic Building)

### 🎯 Goal

Understand how to control the order in which code executes. Moving from sequential execution (line-by-line) to branching logic based on conditions.

---

### 1. What is Control Flow?

By default, JavaScript executes code sequentially from top to bottom. Control flow allows us to **skip specific lines** or **jump to different lines** based on whether a condition is `true` or `false`.

**Key Concepts:**

* **Branching:** Splitting the code execution path.
* **Condition:** A statement that evaluates to `true` or `false` (Boolean).

---

### 2. The `if` Statement

The most basic form of control flow. "If this condition is true, do this."

**Syntax:**

```javascript
if (condition) {
    // Code to run if condition is true
}

```

**Example:**

```javascript
let isRaining = true;
if (isRaining) {
    console.log("Take an umbrella ☔");
}

```

---

### 3. The `if...else` Statement

Handles both scenarios: when the condition is met (true) and when it is not (false).

**Syntax:**

```javascript
if (condition) {
    // Code if true
} else {
    // Code if false
}

```

**Real-world Logic (Voting):**

```javascript
let age = 16;
if (age >= 18) {
    console.log("Eligible to vote ✅");
} else {
    console.log("Not eligible to vote ❌");
}

```

* **Best Practice:** Always use curly braces `{}` even if there is only one line of code inside the block for readability and error prevention.

---

### 4. Handling Multiple Conditions (`else if`)

When you have more than two possible outcomes (e.g., Grading System).

**Logic:**

* Check Condition A.
* If A is false, check Condition B.
* If B is false, check Condition C.
* If all fail, do the default `else`.

**Example (Grading System):**

```javascript
let score = 85;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B"); // This will execute
} else if (score >= 70) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

```

* **Early Exit:** Once a condition is met (e.g., `score >= 80`), JS executes that block and **skips the rest**. It won't check 70 or the final else.

**Independent `if` vs `else if`:**

* **Multiple `if`s:** All conditions are checked independently. (e.g., A number can be both "Equal to 0" and "Less than 10").
* **`else if`:** Connected chain. Only one block will ever run.

---

### 5. Nested `if` Statements

Putting an `if` statement inside another `if` statement.

```javascript
let isWeekend = true;
let isSunny = false;

if (isWeekend) {
    if (isSunny) {
        console.log("Go to the beach 🏖️");
    } else {
        console.log("Watch a movie at home 🎬");
    }
} else {
    console.log("Go to work 💼");
}

```

---

### 6. The `switch` Statement

An alternative to `if...else` when you are comparing a single variable against **multiple fixed values** (e.g., Day of the week, Menu items).

**Syntax:**

```javascript
switch (value) {
    case value1:
        // Code
        break;
    case value2:
        // Code
        break;
    default:
        // Fallback code
}

```

**Key Features:**

* **`case`:** The value to match against.
* **`break`:** **CRITICAL!** Stops execution and exits the switch block. Without it, JS will "fall through" and execute the next case automatically (sometimes useful, often a bug).
* **`default`:** Acts like the final `else`. Runs if no cases match.

**Example (Day of Week):**

```javascript
let dayNumber = 3;

switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday"); // Output
        break;
    default:
        console.log("Invalid Day");
}

```

#### Grouping Cases (Fall-through logic)

You can group cases to run the same code for multiple inputs.

```javascript
let city = "Bangalore";
switch (city) {
    case "Bangalore":
    case "Kolkata":
    case "Jaipur":
        console.log("This city is in India 🇮🇳"); // Runs for any of the 3 cities
        break;
    case "New York":
        console.log("This city is in USA 🇺🇸");
        break;
}

```

---

### ⚔️ `if...else` vs `switch`: Which to use?

| Feature | `if...else` | `switch` |
| --- | --- | --- |
| **Use Case** | Complex logical conditions, ranges (e.g., `age > 18 && age < 60`). | Checking a single variable against fixed values (e.g., `role === 'admin'`). |
| **Performance** | Can be slower if many conditions exist (checks sequentially). | Generally faster for many fixed values (Jump Table optimization). |
| **Readability** | Can get messy with too many `else if`s. | Clean and structured for discrete values. |
| **Matching** | Can check anything (truthy/falsy, ranges). | Only checks strict equality (`===`). |

---

### 📝 Day 4
## 1. What will be the output of this code snippet and why?
 ```js
 let day = "Monday";

switch (day) {
    case "monday":
        console.log("It's the start of the week.");
        break;
    default:
        console.log("It's a normal day.");
}
```

## 2. Build an ATM Cash Withdrawal System
Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.

## 3. Build a Calculator with switch-case
Write a simple calculator that takes an operator (+, -, , /, %) as input, and performs the operation on two numbers. Print the output on the console.

## 4. Pay for your movie ticket
Imagine, the INOX charges ticket prices based on age:
- Children (<18 years): $3
- Adults (18 - 60 years): $10
- Seniors (60+ years): $8

Write a program that prints the ticket price based on the person’s age.

## 5. Horoscope Sign Checker
Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. Make it month bases, not date based. Like March and April borns are Aries, Aplil and May born are Taurus, and so on. Do not use if-else.

## 6. Which Triangle?
A triangle has 3 sides. A Triangle type is determined by its sides:
- All sides equal is called, `Equilateral Triangle`.
- Two sides equal is called, `Isosceles Triangle`.
- All sides different is called, `Scalene Triangle`.

Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs everytime manually to see if the output changes correctly.