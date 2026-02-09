function rockPaperScissors(){
    console.log("Welcome to the Rock 🪨, Paper 🧻, or Scissors ✂️ game");

    const userInput = prompt("Enter Rock 🪨, Paper 🧻, or Scissors ✂️");
    const userChoice = userInput.toLowerCase();

    let computerChoice;
    const randomNumber = Math.floor((Math.random() * 3) + 1);
    
    if(randomNumber === 1){
        computerChoice = "rock";
    }

    else if (randomNumber === 2){
        computerChoice = "paper";
    }

    else{
        computerChoice = "scissors";
    }

    console.log("User selected", userChoice);
    console.log("Computer selected", computerChoice);

    if(
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") || 
        (userChoice === "scissors" && computerChoice === "paper")
    ){
        console.log("YAYYY!!!, You Win")
    }

    else if (userChoice === computerChoice){
        console.log("It's a Draw");
    }

    else if (
        (userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "rock")
    ){
        console.log("Oh Ho... Computer Wins!!!!");
    } else {
        console.log("Please check the input, We didn't understand it.")
    }

    const playAgainPrompt = prompt("Do You Want to Play Again? (yes/no)")
    const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";

     if (playAgain === "yes") {
        rockPaperScissors();
    } else {
        console.log("Thanks for Playing! See you Next Time")
    }

    
}

rockPaperScissors();