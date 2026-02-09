# 🛠️ Day 7: Project Day - Building Logic

### 🎯 Goal

Apply all the concepts learned in **Module 1 (Days 1-6)** — Variables, Operators, Control Flow, Loops, and Functions — to build real, interactive projects.

---

### 🧠 Project Thinking: The Mental Model

Before writing code, break down the problem into logical steps and assumptions.

**Example: Rock Paper Scissors**

* **Assumption 1:** Need to ask the user for input (Rock, Paper, or Scissors).
* **Assumption 2:** The computer needs to make a random selection.
* **Assumption 3:** We need logic to compare the two choices based on game rules (Rock beats Scissors, Scissors beats Paper, Paper beats Rock).
* **Assumption 4:** Announce the winner or if it's a tie.
* **Assumption 5 (Optional):** Ask the user if they want to play again.

---

### 🔧 Key Concepts Applied

#### 1. User Interaction (Browser APIs)

We use built-in browser methods to get input from the user.

* **`prompt(message)`**: Displays a dialog box asking for input. Returns the text entered as a string, or `null` if canceled.
```javascript
const userChoice = prompt("Enter Rock, Paper, or Scissors:");

```


* **`alert(message)`**: Displays a simple message in a dialog box.
```javascript
alert("You Win!");

```



#### 2. Handling Input Errors

User input is unpredictable. We must handle cases where they:

* Type in different cases (e.g., "RoCk" vs "rock"). -> **Solution:** Use `.toLowerCase()`.
* Click "Cancel" in the prompt. -> **Solution:** Check for `null` and provide a fallback.

```javascript
let choice = prompt("Enter choice:");
// Handle null (Cancel button) and convert to lowercase
let finalChoice = (choice ? choice.toLowerCase() : "no"); 

```

#### 3. Random Number Generation

To make the computer's choice random, we use the `Math` object.

* **`Math.random()`**: Returns a random decimal between `0` (inclusive) and `1` (exclusive).
* **`Math.floor()`**: Rounds a number **down** to the nearest integer.

**Formula for a random range (e.g., 1 to 3):**

```javascript
// (Math.random() * max_range) + start_offset
const randomNumber = Math.floor(Math.random() * 3) + 1;

```

* *Why `* 3`?* Scales the 0-1 range to 0-2.99.
* *Why `floor`?* Turns it into 0, 1, or 2.
* *Why `+ 1`?* Shifts it to become 1, 2, or 3.

#### 4. Game Logic (Control Flow)

Using `if`, `else if`, and logical operators (`&&`, `||`) to determine the outcome.

```javascript
if (user === "rock" && computer === "scissors") {
    console.log("User Wins!");
} else if (user === computer) {
    console.log("It's a Tie!");
} 
// ... other conditions

```

#### 5. Replayability (Recursion)

To let the user play again without refreshing the page, we can wrap the game logic in a function and call that function again based on user input.

```javascript
function playGame() {
    // ... game logic here ...
    
    let playAgain = prompt("Play again? (yes/no)");
    if (playAgain === "yes") {
        playGame(); // Recursive call starts the game over
    } else {
        console.log("Thanks for playing!");
    }
}

```


