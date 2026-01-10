# 📦 Day 2: Variables, Data Types & Memory

### 1. Understanding Variables

* **Definition:** A variable is a named storage location used to hold data in JavaScript.
* **The Analogy:** Think of a variable as a **Box**.
* **Variable Name:** The label on the box (e.g., `fruit`).
* **Value:** The item inside the box (e.g., `mango`).
* **Memory:** The shelf where you store the box.



### 2. Variable Syntax & Assignment

To create a variable, we use a **specifier** (keyword), a **name**, and an **assignment operator**.

**Syntax:**
`specifier variableName = value;`

**Example:**

```javascript
let fruit = "Mango"; // Declaration and Assignment

```

* **Assignment Operator (`=`):** Puts the value on the right into the variable on the left.
* **Re-assignment:**
```javascript
fruit = "Kiwi"; // The "Mango" is thrown out, "Kiwi" is put in the box.

```


* **Pass by Value (Primitives):** When you assign one primitive variable to another (e.g., `a = b`), it copies the *value*. Changing one does not affect the other.

---

### 3. Naming Rules (The Grammar)

JavaScript is strict about how you name variables.

**✅ Allowed:**

* Letters (a-z, A-Z) and Digits (0-9).
* Special characters: Only **Dollar sign (`$`)** and **Underscore (`_`)**.
* *Example:* `let $price = 10;`, `let _user = "Alex";`

**❌ Not Allowed:**

* **Cannot start with a digit.** (e.g., `let 2day` is invalid).
* No hyphens (`-`) or spaces.
* **No Reserved Keywords:** Words that JS uses internally (e.g., `if`, `for`, `class`, `return`).

**📝 Best Practices:**

* **Camel Case:** Start small, capitalize subsequent words (e.g., `myHomeAddress`).
* **Descriptive:** Use `salary` instead of `x` or `amt`.
* **Case Sensitive:** `myName` and `MyName` are two completely different variables.

---

### 4. `var` vs `let` vs `const`

Modern JavaScript (ES6+) introduced `let` and `const` to fix issues with `var`.

| Feature | `var` (Legacy/Evil Sister) | `let` (Modern Standard) | `const` (Constant) |
| --- | --- | --- | --- |
| **Re-declare?** | ✅ Yes (Can declare same name twice) | ❌ No (Throws Error) | ❌ No (Throws Error) |
| **Re-assign?** | ✅ Yes | ✅ Yes | ❌ No (Immutable binding) |
| **Scope** | Function Scope | Block Scope | Block Scope |
| **Best Practice** | **Avoid using.** | Use when value changes. | **Default choice.** |

> **Note:** Always prefer `const`. If you know the value will change (like a counter), use `let`. Never use `var`.

---

### 5. Data Types

JavaScript values are divided into two categories.

#### A. Primitive Types (Basic)

These are simple data types.

1. **String:** Text data. `let name = "Tapas";`
2. **Number:** Integers and decimals. `let age = 24;`
3. **Boolean:** Logical entity. `true` or `false`.
4. **Undefined:** A variable declared but **not assigned a value**.
5. **Null:** A variable intentionally assigned "nothing" or "empty".
6. **BigInt:** For very large numbers.
7. **Symbol:** Used for unique identifiers.

#### B. Non-Primitive Types (Reference/Complex)

These are complex types built using primitives.

1. **Object:** Key-value pairs.
```javascript
const student = { name: "Alice", age: 22 };

```


2. **Array:** A list of values. `[1, 2, 3]`
3. **Function:** A block of reusable code.

---

### 6. Memory Management: Stack vs. Heap

How does JavaScript store these values in your computer's RAM?

* **Stack Memory:**
* Stores **Primitive** values (String, Number, Boolean).
* Static memory allocation (fixed size).
* Fast access.


* **Heap Memory:**
* Stores **Non-Primitive** values (Objects, Arrays).
* Dynamic memory allocation.
* Variables in the *Stack* hold a "reference" (address) pointing to the data in the *Heap*.



---

### 7. How JavaScript Executes Code

When you feed code to the JS Engine, it doesn't run immediately. It goes through steps:

1. **Tokenizing:** Breaking code into small pieces (tokens).
2. **Parsing:** converting tokens into an **AST (Abstract Syntax Tree)**.
* *Tool:* You can visualize this using [AST Explorer](https://astexplorer.net/).


3. **Interpreting/Compiling:** Converting the AST into machine code that the computer understands.

---

## **👩‍💻 🧑‍💻 Assignment Tasks**

- ✅ Task 1: Declare variables for a person’s name, age, isStudent status, and favorite programming language.
- ✅ Task 2: Print the values to the console.
- ✅ Task 3: Try reassigning values to let and const variables and observe errors.
- ✅ Task 4: Create an object and an array, assign them to new variables, modify, and observe changes.