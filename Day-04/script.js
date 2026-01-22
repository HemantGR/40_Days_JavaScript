console.log("Day-04");

//if statement
let catchbus = false;

if (catchbus === true){
    console.log("I will Reach home on time");
}
//else statement
else{
    console.log("I will be late")
}

//Ternary Opr
catchbus ? console.log("I have taken the bus") : console.log("I missed the bus");

//Wap to check the age for Voting
let age = 17;
if (age >= 18){
    console.log("You are eligible for voting");
}

else{
    console.log("You are not eligible for voting");
}

// Let's build a grading system
// if score is >= 90, Grade A
// if score if >= 80, Grade B
// If score if >= 70, Grade C
// Fail

let score = 89;
if(score >=90){
    console.log("Grade A");
}

else if(score >= 80){
    console.log("Grade B");
}

else if(score >= 70){
    console.log("Grade C");
}

else{
    console.log("Fail");
}

//Inner if else
const condition = true;
const innerCondition = false;

if (condition) {
    console.log("Outer if");
    if (innerCondition) {
        console.log("Inner if");
    } else {
        console.log("Inner else");
    }
} else {
    console.log("Outer else");
}

//Switch-Case


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

//City example

let city = "Bangalore";
switch (city) {
    case "Bangalore":
        console.log("This city is in India");
        break;
    case "Kolkata":
        console.log("This city is in India");
        break;
    case "Jaipur":
        console.log("This city is in India");
        break;
    case "New York":
        console.log("This city is in USA");
        break;
}