# 🌐 Day 10: Scope & Scope Chain

---

### 1. What is Scope?

* **Analogy:** A house with multiple rooms. Some things (like Wi-Fi) are accessible everywhere. Other things (like a private diary) are only accessible in a specific room.
* **Definition:** Scope determines the **accessibility (visibility)** of variables in your code. It dictates which parts of your program can "see" and use a specific variable.

### 2. Types of Scope

JavaScript has four types of scope (we will focus on the first three):

| Scope Type | Description | Visibility |
| --- | --- | --- |
| **Global Scope** | Variables declared outside of any function or block `{}`. | Accessible **everywhere** in your code. |
| **Function Scope** | Variables declared inside a function `function() {}`. | Accessible **only inside that specific function**. |
| **Block Scope** | Variables declared inside a block `{}` (e.g., `if`, `for`). | Accessible **only inside that specific block**. |

---

### 3. Key Differences: `var`, `let`, and `const`

The keyword you use to declare a variable defines its scope behavior.

#### A. Global Scope Behavior

* **`var`**: Globally declared `var` variables are attached to the **Global Object** (e.g., `window` in browsers). You can access them via `window.variableName`.
* **`let`/`const**`: Globally declared `let`/`const` variables are **NOT** attached to the Global Object.

#### B. Function Scope Behavior

* **All Three (`var`, `let`, `const`)**: Variables declared inside a function are strictly functional-scoped. They are **never** accessible from the outside.

```javascript
function sayHello() {
    var secretVar = "I'm hidden";
    let secretLet = "I'm also hidden";
}
sayHello();
console.log(secretVar); // Uncaught ReferenceError

```

#### C. Block Scope Behavior

This is the most critical difference!

* **`var`**: **NOT Block-Scoped**. If declared in a block `{}` (like an `if` statement or a `for` loop), `var` variables "leak" out and are accessible in the surrounding scope.
* **`let`/`const**`: **ARE Block-Scoped**. They are confined strictly within the block `{}` where they are declared.

```javascript
if (true) {
    var leak = "I leaked out";
    let stay = "I'm trapped";
}
console.log(leak); // Output: "I leaked out"
console.log(stay); // Uncaught ReferenceError

```

---

### 4. Variable Shadowing

* **Definition:** Shadowing occurs when a variable declared in an **inner scope** has the exact same name as a variable in an **outer scope**.
* The inner variable **temporarily hides (shadows)** the outer variable within that inner scope. JavaScript always prioritizes the closest variable.

```javascript
let message = "Global";

function show() {
    let message = "Local"; // Shadows the global 'message'
    console.log(message); // Output: "Local"
}
show();
console.log(message); // Output: "Global"

```

---

### 5. The Scope Chain

* **Definition:** The mechanism JavaScript uses to resolve variable values. When you access a variable, JavaScript starts searching in the current, **innermost scope**.
* If it doesn't find the variable there, it **looks up** to the next outer (parent) scope.
* This "looking up" continues chain-by-chain until it either:
1. Finds the variable.
2. Reaches the Global Scope and still doesn't find it (results in a `ReferenceError`).


* **Crucial Rule:** The Scope Chain **only looks UP** to parent scopes. Outer scopes cannot look down into inner child scopes.

---

### 📈 Best Practices

1. **Stop Using `var`:** It lacks block scope and can lead to bugs due to variable leakage.
2. **Use `const` by Default:** If a variable's value shouldn't change, use `const`. It provides safety.
3. **Use `let` When Needed:** Use `let` only when you specifically need to reassign a variable's value (e.g., a loop counter).

---