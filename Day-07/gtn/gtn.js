function userInput() {
    const enterInput = prompt("Enter a number between 1 and 10");

    const strToNum = Number(enterInput);


    if (isNaN(strToNum) || strToNum < 1 || strToNum > 10) {
        alert("Invalid input! Please enter a number between 1-10.");
        return userInput();
    }

    return strToNum;
}

function guesstheNumber() {
    console.log("Welcome to the Guess the Number Game");
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    let userNumber = userInput();
    
    let count = 1;

    while (userNumber !== randomNumber) {
        
        if (userNumber > randomNumber) {
            console.log("Too high! Try again."); 
        } else {
            console.log("Too low! Try again.");
        }

        userNumber = userInput();
        count++;
    }


    console.log("Congratulations! You guessed the number in " + count + " attempts!");

    let playAgain = confirm("Do you want to play again?");
    if (playAgain) {
        guesstheNumber();
    } else {
        console.log("Thanks for playing!");
    }
}

guesstheNumber();