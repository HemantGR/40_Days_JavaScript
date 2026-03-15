# 📦 Day 12: Objects & Object Manipulation (Full Notes)

### 1. Object Creation & Basics

The most straightforward way to create an object is using the **Object Literal Syntax** `{}`. Objects store data in **key-value pairs** separated by a colon.

```javascript
let user = {
    name: "Tapas",     
    age: 40,
    "is admin": false  // Keys with spaces/special characters MUST be in quotes
};

```

* **Note:** If a key doesn't have special characters, JavaScript automatically coerces it into a string behind the scenes, so quotes are optional.

#### Accessing, Modifying, and Deleting Properties

* **Dot Notation (`.`):** Used for standard keys. `console.log(user.name);`
* **Bracket Notation (`[]`):** MUST be used for keys with spaces or special characters.
* `console.log(user["is admin"]);` *(Using `user.is admin` will throw a syntax error).*


* **Updating/Adding:** `user.age = 34;` or `user["movie lover"] = true;`
* **Deleting:** Use the `delete` keyword. `delete user["movie lover"];`

---

### 2. Dynamic Keys

Sometimes key names are not hardcoded but come dynamically from user input or variables.

**A. Accessing with a Dynamic Key:**
You cannot use Dot Notation for dynamic variables. You must use Bracket Notation.

```javascript
const someKey = "age";
console.log(user[someKey]); // Output: 34. (Do NOT use user.someKey)

```

**B. Creating an Object with a Dynamic Key:**
If you get a key name from a prompt (e.g., `let car = prompt("Favorite car?");`), you can compute the key dynamically when creating the object by putting the variable in brackets `[]`.

```javascript
let fabCars = {
    [car]: 5 // If user typed "BMW", this becomes { BMW: 5 }
};

```

---

### 3. Advanced Object Creation Patterns

Beyond Object Literals, there are other ways to create objects, which are important for Object-Oriented Programming (OOP) and reusability.

#### A. Constructor Functions

Used as a "blueprint" to create multiple instances of a similar object.

* **Convention:** Always start the function name with a **Capital Letter**.
* **Usage:** Must be invoked using the **`new`** keyword.

```javascript
function Car(name, model) {
    this.name = name;
    this.model = model;
}

const myCar = new Car("BMW", "X1");
const anotherCar = new Car("Audi", "A8");

// Benefit: You can check the type!
console.log(myCar instanceof Car); // true

```

#### B. The `new Object()` Constructor

JavaScript's built-in object constructor.

```javascript
const person = new Object();
person.name = "Alpha";
person.age = 76;

```

#### C. Factory Functions

A standard function that returns a newly created object. Doesn't require the `new` keyword.

```javascript
function createUser(name, age) {
    return {
        name: name,
        age: age
    };
}
const user1 = createUser("Tapas", 39);

```

* **Shorthand Property Names:** If the key name and the parameter variable name are exactly the same, you can use the ES6 shorthand:
```javascript
// Instead of { name: name, age: age }
return { name, age }; 

```



---

### 4. Object Methods & Nested Objects

* **Methods:** When a function is a property of an object, it is called a method. Inside a method, use the `this` keyword to access sibling properties within the same object.
* **Nested Objects:** An object can hold another object as a value.

```javascript
let profile = {
    name: "Tapas",
    address: {              // Nested Object
        city: "Bangalore",
        country: "India"
    },
    greet: function() {     // Method
        console.log("Hello, " + this.name);
    }
};
console.log(profile.address.country); // "India"
profile.greet(); // "Hello, Tapas"

```

---

### 5. Checking Property Existence & Iteration

#### A. The `in` Operator (Safest Check)

Do not use `if (profile.salary)` to check if a property exists. If the salary exists but is explicitly set to `undefined` or `0` (falsy), the check will fail. Use the `in` operator instead.

```javascript
console.log("salary" in profile); // Returns true or false accurately

```

#### B. The `for...in` Loop

Used to iterate over all the keys in an object.

```javascript
for (let key in profile) {
    console.log(key);               // Prints the key (e.g., "name")
    console.log(profile[key]);      // Prints the value (e.g., "Tapas")
}

```

---

### 6. Memory, References & Deep vs. Shallow Cloning ⚠️

Objects are **Non-Primitive Reference Types**. They are stored in the **Heap memory**.

* If you assign `let fruit = { name: "Mango" }` and then `let anotherFruit = fruit`, **both variables point to the exact same memory address.**
* `fruit === anotherFruit` will be `true`. Changing one changes the other.

#### Shallow Copy (`Object.assign`)

Copies properties from a source object to a target object.

* **The Catch:** It only copies the top-level properties. If there is a *nested object*, it only copies the *reference* to that nested object.

```javascript
const obj3 = { a: 1, b: { c: 2 } };
const obj4 = Object.assign({}, obj3);

obj4.b.c = 3; 
// BUG! obj3.b.c ALSO becomes 3 because the nested object 'b' shares the same memory reference.

```

#### Deep Copy (`structuredClone`)

Creates a completely disconnected, independent clone, including all deeply nested objects.

```javascript
const obj5 = structuredClone(obj3);
obj5.b.c = 30; // Modifying this does NOT affect obj3!

```

---

### 7. Global `Object` Static Methods

JavaScript provides built-in methods on the `Object` class.

| Method | What it does |
| --- | --- |
| `Object.keys(obj)` | Returns an array of the object's keys: `["name", "age"]`. |
| `Object.entries(obj)` | Converts an object into an array of arrays: `[["name", "Tapas"], ["age", 40]]`. |
| `Object.fromEntries(arr)` | Converts an array of key-value pairs back into an object. |
| `Object.freeze(obj)` | Makes the object 100% immutable. Cannot add, delete, or modify properties. |
| `Object.seal(obj)` | Prevents adding or deleting properties, but **ALLOWS modifying existing ones**. |
| `Object.hasOwn(obj, key)` | A safer, static alternative to checking if a property exists natively on the object. |

---

### 8. Object Destructuring (Deep Dive)

Destructuring allows you to unpack properties from objects into distinct variables, writing much less code.

**1. Basic Destructuring:**

```javascript
const student = { name: "John", age: 9, standard: 3 };
const { name, age } = student; 

```

**2. Adding Default Values:**
Extract a variable that might not exist in the object, and provide a fallback.

```javascript
const { name, meal = "Bread" } = student; // meal becomes "Bread"

```

**3. Dynamic Variables from Destructured properties:**

```javascript
const { subjects } = student;
const numOfSubjects = subjects.length; // Compute new variables from destructured ones

```

**4. Aliases (Renaming Variables):**
Crucial for avoiding naming conflicts (e.g., fetching data from multiple APIs where both return a `name` key).

```javascript
const { standard: std } = student; 
console.log(std); // 3 (The variable is now named 'std', not 'standard')

```

**5. Nested Destructuring:**
Extract properties from inside nested objects in one line.

```javascript
const student = { address: { zip: 5791 } };
const { address: { zip } } = student; 
console.log(zip); // 5791

```

**6. Destructuring Function Parameters:**
Instead of passing a whole object and querying it inside, destructure right in the parameter list.

```javascript
function sendEmail({ parents: { email } }) {
    console.log("Sent email to " + email);
}
sendEmail(student);

```

**7. Destructuring in Loops (`for...of`):**
When looping through an array of objects.

```javascript
const studentsArr = [{name: "Will", grade: "A"}, {name: "Bob", grade: "B"}];
for (let { name, grade } of studentsArr) {
    console.log(name, grade);
}

```

---

### 9. Optional Chaining (`?.`)

Introduced in ES2020, it safely accesses deeply nested properties without throwing a `Cannot read properties of undefined` error if a parent object is missing.

```javascript
let emp = { name: "Alex" }; // Has no 'department'

// The Old Way (Throws an error and crashes the app)
// console.log(emp.department.name); 

// The Safe Way with Optional Chaining
console.log(emp.department?.name); // Returns 'undefined' gracefully instead of crashing

```