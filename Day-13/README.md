# 🕵️ Day 13: Demystifying the `this` Keyword (Complete Notes)

### 🎯 Overview
The `this` keyword is notorious in JavaScript because its value isn't static. It doesn't depend on *where* a function is written, but rather **how the function is called (invoked)**. 

*Note: The entire script is running in `"use strict";` mode, which changes how default bindings behave, making your code safer and less prone to global object bugs.*

---

### 1. Global Scope (Default Binding)
When you log `this` in the global scope (outside of any function or object), it defaults to the global environment.

```javascript
console.log("this at the global", this); // Output: Window object (in browsers)
```

---

### 2. Inside of an Object (Implicit Binding)
When a function is called as a method of an object, `this` is implicitly bound to the object that is standing to the **left of the dot** at call time.



**Example A: Standard Object Method**
```javascript
const emplpyee = {
    id: "A5778",
    firstName: "Alex",
    lastName: "B",
    returnThis: function() {
        return this; // Points to the 'employee' object
    },
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
}
console.log(emplpyee.returnThis()); // Output: The entire employee object
console.log(emplpyee.getFullName()); // Output: "Alex B"
```

**Example B: Dynamic Implicit Binding**
You can dynamically attach a function to an object. `this` will always point to whatever object triggered the method.
```javascript
const tom = { name: "Tom", age: 7 };
const jerry = { name: 'jerry', age: 3 };

function greetMe(obj) {
    // Dynamically adding a method to the passed object
    obj.logMessage = function() {
        console.log(`${this.name} is ${this.age} years old!`);
    }
}

greetMe(tom);
tom.logMessage(); // 'this' is bound to tom. Output: Tom is 7 years old!

greetMe(jerry);
jerry.logMessage(); // 'this' is bound to jerry. Output: jerry is 3 years old!
```

---

### 3. Inside a Regular Function (Lost Context)
When you call a standard, standalone function, it has no object to the "left of the dot". 

Because we are in `"use strict";` mode, JavaScript refuses to bind `this` to the global `window` object to protect you from accidental global variables.
```javascript
function sayName() {
    console.log("this inside a function", this);
}
sayName(); // Output: undefined

function outer(a) {
    console.log("this inside an outer function", this); // Output: undefined
    return function inner(b) {
        console.log("this inside an inner function", this); // Output: undefined
    }
}
const outerResult = outer(5);
outerResult(3);
```

---

### 4. Inside the Arrow Function (Lexical Scoping)
Arrow functions are special: **they do not have their own `this`**. Instead, they inherit `this` from their parent scope exactly where they are written (lexical scope).

**Example A: Global Arrow Function**
```javascript
const getFood = () => this;
console.log(getFood()); // Inherits from global scope -> Output: Window object
```

**Example B: Arrow Functions inside Objects**
* If you just use an arrow function as a direct object method, it inherits the global scope (which is bad).
* **The Fix:** Use a regular function for the object method, and return an arrow function inside it. The arrow function will inherit the `this` from the regular function!

```javascript
const food = {
    name: "mango",
    color: "yellow",
    
    // BAD: getDesc: () => `${this.name} is ${this.color}` -> 'this' is window
    // GOOD: Normal method
    getDesc: function() {
        // Arrow function inherits 'this' from getDesc (which points to 'food')
        return () => `${this.name} is ${this.color}`; 
    }
}
const descFunc = food.getDesc();
console.log(descFunc()); // Output: "mango is yellow"
```

---

### 5. Explicit Binding (`call`, `apply`, `bind`)
When you want to force `this` to point to a specific object, you use Explicit Binding.



| Method | Execution | Arguments | Example Code |
| :--- | :--- | :--- | :--- |
| **`call()`** | Immediate | Comma-separated | `likes.call(person, "Teaching", "Blogging")` |
| **`apply()`** | Immediate | As an Array `[]` | `likes.apply(person, ["Sleeping", "Eating"])` |
| **`bind()`** | Delayed (Returns a new function) | Comma-separated | `const newFn = newHobbies.bind(officer, "Dancing");` |

**Code Example (`call` & `apply`):**
```javascript
const likes = function(hobby1, hobby2) {
    console.log(this.name + ' likes ' + hobby1 + ' , ' + hobby2);
}
const person = { name: "Tapas" };

likes.call(person, "Teaching", "Blogging"); // Passes strings
const hobbiesToApply = ["Sleeping", "Eating"];
likes.apply(person, hobbiesToApply); // Passes an array
```

**Code Example (`bind`):**
```javascript
const officer = { name: 'Bob' };
// Returns a NEW function, permanently locked to 'officer'
const newFn = newHobbies.bind(officer, "Dancing", "Singing"); 
newFn(); // Executes later!
```

---

### 6. The `new` Binding (Constructors)
When you use the `new` keyword, JavaScript creates a brand new, empty object and automatically binds `this` to that new object.

```javascript
const Cartoon = function(name, animal) {
    this.name = name; // 'this' points to the newly created object
    this.animal = animal;
    this.log = function() {
        console.log(this.name + ' is a ' + this.animal);
    }
};

const tomCartoon = new Cartoon("Tom", "Cat");
tomCartoon.log(); // Output: "Tom is a Cat"
```

---

### 7. Tricky Examples (Interview Gotchas)

**Gotcha 1: Inner functions losing context**
If a regular function is nested inside a method, it loses the `this` context (Rule 3). The modern fix is using an arrow function for the inner function, because it inherits the parent's `this` (Rule 4).
```javascript
const user = {
    name: "Tapas",
    greet: function () {
      const inner = () => { // Arrow function saves the day!
        console.log(`Hello, ${this.name}!`);
      }
      inner();
    },
};
user.greet(); // Output: Hello, Tapas!
```

**Gotcha 2: Detaching a method from its object**
If you assign a method to a new variable, it loses its implicit binding to the object.
```javascript
const obj = {
    name: "John",
    greet: function () {
      console.log(`Hello, ${this.name}!`);
    },
};

const greetFn = obj.greet; // You just detached the function!
// greetFn(); // This would throw an error or print undefined in strict mode

// The Fix: Explicitly bind it back
greetFn.call(obj); // Output: Hello, John!
```
