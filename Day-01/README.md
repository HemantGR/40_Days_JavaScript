# 📅 Day 1: Introduction, History & Environment Setup

## 🚀 Course Overview

* **Goal:** Go from absolute beginner to advanced JavaScript (Projects, Problem Solving, Real-world applications).
* **Structure:** Video every couple of days (not daily) to allow time for assignments and deep understanding.
* **Tracking:** Use the provided Notion template to track progress.
* **Philosophy:** Consistency is key. "It's like an antibiotic dose; you must complete the course to see the results."

## 🧐 What is JavaScript?

* **Definition:** A programming language used to build interactive elements on the web (client-side) and handle logic on servers (server-side).
* **Role:**
   * **HTML:** Structure (The skeleton).
   * **CSS:** Presentation (The styling/beauty).
   * **JavaScript:** Behavior/Interactivity (The magic/logic).
* **Usage:** Used by major platforms (Facebook, Netflix, Amazon) and essential for Web, Mobile, Games, and AI-powered products.

## 📜 Brief History of JavaScript

* **1995:** Created by Brendan Eich in 10 days at Netscape.
* **1997:** ECMA Standardization (ES1).
* **2009 (ES5):** Introduction of JSON, forEach, map, filter.
* **2015 (ES6/Modern JS):** Major update introducing let, const, classes, modules, and arrow functions.
* **2016 - Present:** Continuous annual updates (ES7, ES8, etc.) and rise of frameworks like React, Vue, Angular, and Node.js.

## 🛠️ Environment Setup

To start coding, you need the following tools:

1. **Code Editor:** VS Code (Visual Studio Code) is recommended.
2. **Web Browser:** Google Chrome (preferred for its DevTools).
   * **Tip:** Right-click > Inspect > Console tab is your playground.
3. **Extensions:** Live Server (VS Code extension to auto-refresh browser on save).
4. **Runtime:** Node.js (for running JS outside the browser/server-side).

## 💻 Ways to Execute JavaScript

### 1. Browser Console

You can write code directly in the Chrome DevTools Console.

```javascript
console.log("Hello JavaScript");
```

* **Strings:** Text wrapped in quotes (e.g., "Hello").
* **console.log():** Prints output to the debug console.

### 2. Inline Script (In HTML)

Writing JS directly inside an HTML file using the `<script>` tag.

```html
<body>
    <script>
        console.log("Hello from Inline");
    </script>
</body>
```

* **Verdict:** Avoid. It breaks the "Separation of Concerns" principle. Keep structure (HTML) and logic (JS) separate.

### 3. External Script (The Best Practice)

Create a separate `.js` file (e.g., `script.js`) and link it to the HTML.

```html
<script src="script.js"></script>
```

## 🧠 The Critical Concept: Script Loading Strategies

When linking external scripts, where and how you include the script tag matters significantly.

### The Problem (Parsing Order)

If you put a script in the `<head>` that tries to manipulate a DOM element (like a `<div>`) located in the `<body>`:

* **Result:** The script runs before the HTML is parsed/created.
* **Error:** JavaScript returns null (cannot find the element).

### Solution A: Script at Bottom of Body

* Place `<script src="...">` just before the closing `</body>` tag.
* **Pros:** Ensures all HTML is parsed before JS runs.
* **Cons:** Browser waits to download the script until HTML is finished (slower performance).

### Solution B: The async Attribute

```html
<head>
    <script async src="script.js"></script>
</head>
```

* **Behavior:** Downloads JS in parallel with HTML parsing. Executes immediately once downloaded (pausing HTML parsing).
* **Use Case:** Third-party scripts independent of your DOM (e.g., Analytics, Ads).
* **Risk:** Execution order is not guaranteed.

### Solution C: The defer Attribute (Recommended) 🏆

```html
<head>
    <script defer src="script.js"></script>
</head>
```

* **Behavior:** Downloads JS in parallel with HTML parsing. Waits to execute until the HTML parsing is fully complete.
* **Pros:** Non-blocking download, guarantees DOM is ready, preserves execution order.
* **Verdict:** Use defer for your application code.

## 👩‍💻 🧑‍💻 Assignment Tasks

### ✅ Task 1: Setting Up Your Environment

1. Install VS Code (if not installed).
2. Set up Live Server or open the HTML file directly in a browser.
3. Open the DevTools Console (Right-click → Inspect → Console).

### ✅ Task 2: Write Your First JavaScript Code

1. Create a new file: `index.html`.
2. Add a `<script>` tag inside the HTML file or link an external `script.js`.
3. Inside `script.js`, write a simple greeting program:

```javascript
console.log("Hello, tapaScript!");
console.log("Welcome to 40 Days of JavaScript!");
document.write("Check the browser console for a message!");
```

4. Run the HTML file in the browser and check:
   * The console log prints the text.
   * The `document.write()` outputs text on the webpage.

### ✅ Task 3: Experiment with Different JavaScript Loading Methods

1. Add the script in `<head>`, end of the `<body>` tag.
2. Use `async` and `defer` attributes.
3. Understand the differences.

### ✅ Task 4: Take Notes and Submit

1. Hope you have captured a good notes of your learning.
2. On the Discord, you will find `40 Days of JavaScript`. Please post about your task completion (github repo, screenshots, all) in the `task-assignments` channel.