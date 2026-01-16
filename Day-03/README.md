Here are the structured notes for **Day 3: Operators and Expressions** from the 40 Days of JavaScript Journey.

---

# 📅 Day 3: Operators and Expressions

### 🎯 Goal

Move from storing data to building logic. Today is the foundation for future conditions and loops.

---

### 1. Core Concepts: Definitions

Before diving into specific operators, understand these three terms:

* **Operator:** A symbol used to perform an operation or calculation (e.g., `+`, `-`, `*`).
* **Operand:** The data or values the operator acts upon.
* *Example:* In `x + y`, `+` is the operator, and `x` and `y` are operands.


* **Expression:** A combination of operators and operands that **resolves to a single value**.
* **Assignment Expression:** Assigns a value (e.g., `x = 2`). The final value is 2.
* **Evaluating Expression:** Calculates a new value (e.g., `3 + 4` resolves to 7).



---

### 2. Arithmetic Operators

Used for mathematical calculations on numeric values.

| Operator | Description | Example | Note |
| --- | --- | --- | --- |
| `+` | Addition | `10 + 20` → `30` | **Important:** If used with strings, it performs **concatenation** (e.g., `"Tap" + "as"` → `"Tapas"`). |
| `-` | Subtraction | `20 - 10` → `10` |  |
| `*` | Multiplication | `10 * 20` → `200` |  |
| `/` | Division | `10 / 20` → `0.5` |  |
| `**` | Exponentiation | `10 ** 2` → `100` | (10 to the power of 2) |
| `%` | Remainder (Modulo) | `12 % 5` → `2` | Returns the remainder left over after division. |

#### Increment (`++`) and Decrement (`--`)

Used to increase or decrease a numeric value by 1. They behave differently depending on placement.

* **Post-Increment (`count++`):** Returns the current value *first*, then increments.
```javascript
let count = 5;
console.log(count++); // Output: 5 (returns old value)
console.log(count);   // Output: 6 (now it's incremented)

```


* **Pre-Increment (`++count`):** Increments the value *first*, then returns the new value.
```javascript
let count = 5;
console.log(++count); // Output: 6 (increments first, then returns)

```



*(The same logic applies to Post-Decrement `count--` and Pre-Decrement `--count`)*

---

### 3. Assignment Operators

Used to assign values to variables.

* **Basic Assignment:** `=` (e.g., `let x = 10`)
* **Shorthand Assignments:** Combine an arithmetic operation with assignment.
* `x += 5` is the same as `x = x + 5`
* `x -= 3` is the same as `x = x - 3`
* `x *= 2` is the same as `x = x * 2`
* `x /= 4` is the same as `x = x / 4`



---

### 4. Comparison Operators

Used to compare two values. They always return a Boolean (`true` or `false`).

* **Basic:** `>`, `<`, `>=`, `<=`

#### The Equality Trap (Loose vs. Strict)

This is a common source of bugs in JavaScript.

* **Loose Equality (`==` and `!=`):** DANGEROUS. It performs type coercion (tries to convert types to match before comparing).
* `0 == false` → `true` (Weird, but JS converts both to a similar falsy state).
* `"3" == 3` → `true`.


* **Strict Equality (`===` and `!==`):** RECOMMENDED. Checks both the value AND the data type. No automatic conversion.
* `0 === false` → `false` (Different types: Number vs Boolean).
* `"3" === 3` → `false` (String vs Number).


* **Comparing Objects:** When comparing non-primitive types (objects, arrays), JS checks if they point to the same **memory address**, not if their content is the same.
* `{} === {}` → `false` (Two different objects in memory).



---

### 5. Logical Operators

Typically used with Booleans, but in JS, they return one of the operand values based on "truthy" or "falsy" concepts.

* **Logical AND (`&&`):**
* *Rule:* If the first operand can be converted to `false`, it returns the first operand. Otherwise, it returns the second. (Finds the first falsy value).
* `true && false` → `false`
* `"cow" && "horse"` → `"horse"` (Both truthy, returns the last one).
* `false && "horse"` → `false` (Short-circuits).


* **Logical OR (`||`):**
* *Rule:* If the first operand can be converted to `true`, it returns the first operand. Otherwise, it returns the second. (Finds the first truthy value).
* `"cow" || "horse"` → `"cow"` (Short-circuits).
* `false || true` → `true`.


* **Logical NOT (`!`):** Toggles the boolean value.
* `!true` → `false`


* **Nullish Coalescing Operator (`??`):**
* *Rule:* Returns the right side ONLY if the left side is specifically `null` or `undefined`.
* Good for setting default values when 0 or an empty string `""` are valid values.
* `null ?? "default"` → `"default"`
* `0 ?? "default"` → `0` (Because 0 is not null/undefined).



---

### 6. Conditional (Ternary) Operator

A shorthand way to write a simple `if-else` statement. It takes three operands.

**Syntax:** `condition ? valueIfTrue : valueIfFalse`

```javascript
let age = 23;
let status = (age >= 60) ? "Senior Citizen" : "Non-Senior Citizen";
// status is "Non-Senior Citizen"

```

---

### 7. Other Operators

* **Bitwise Operators:** (`&`, `|`, `^`, `~`, `<<`, `>>`) Operate on numbers at the 32-bit binary level (0s and 1s). Useful for specific low-level tasks but less common in daily web development.
* **Grouping `()`:** Controls **precedence**. Just like math (BODMAS), operations in parentheses are calculated first.
* `1 + 2 * 3` = 7 (Multiplication first)
* `(1 + 2) * 3` = 9 (Grouping first)


* **`typeof`:** Returns a string indicating the type of the unevaluated operand.
* `typeof 100` → `"number"`
* *Gotcha:* `typeof null` → `"object"` (An old JS bug we live with).
* `typeof [1,2]` (array) → `"object"`.


* **`instanceof`:** Checks if an object is an instance of a specific type/class (will be covered deeper in future object sessions).

---

### 📝 Day 3 Task & Next Steps

## 1. Odd or Even?
 - [ ] Take a number and find if the number is an odd or even number.
 - [ ] Print the number and result in the console.

## 2. Do you have a Driving License?
Let's check if you are eligible to get a driving license. The eligibility to get a driving licence is 18 years.

- [ ] Manage `age` as a variable.
- [ ] Check if the age is elligible for a driving license and print it on the console accordingly.

## 3. Calculate CTC with a Bonus
Let's calculate how much you earn from your office.

- [ ] You get 12,300 rupees as your monthly salary.
- [ ] You get a 20% bonus on your annual salary.
- [ ] How much money do you make per annum as a CTC?

## 4. Write a program for the Traffic Light Simulation.
Red Light... Green Light... Let's Play!

- [ ] Create a `color` variable.
- [ ] Based on the color variable's value print in the console if a traveller needs to STOP or GO. The Red color is for STOP and the Green color is for GO.

## 5. Create an Electricity Bill Calculator
Let's calculate how much you pay for electricity bills per month and annually.

- [ ] Create a `units` variable. Based on this value you will calculate the total electricity bill for a months.
- [ ] If each day you consume the `units` and each unit cost 150 rupees, how much will you be charged per month?
- [ ] If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?

## 6. Leap Year Checker
Is 2025 a Leap Year?

- [ ] Take `year` as input.
- [ ] Use the arithmetic operator and ternary operator to print if a year is a leap year or not.

## 7. Max of Three Numbers
Find the max number from the lot.

- [ ] Take three numbers and assign them to variables p, q, and r.
- [ ] Now find the maximum of these three numbers using the comparison operators.

## 8. Bitwise Doubling
A tricky one for you

- [ ] Create a variable `count` and assign  a value, say, 5.
- [ ] Now use the Bitwise shift operator to make the number double.
- [ ] Print it on the console.