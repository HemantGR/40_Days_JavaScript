//Task-01
let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}

//Output = "It's a normal day" as as value stored in the day is in capitalized format and it doesn't match with 1st case because of case sensitive 
// that why we get the default output

//Task-02

let amountWithdraw = 100;

if(amountWithdraw % 100 == 0){
    console.log("Withdrawal successful");
}

else{
    console.log("Invalid amount");
}

//Task-03
let a = 10;
let b = 20;

let opt = "-"

switch (opt){
    case "+":
        console.log(a+b);
        break;
    case "-":
        console.log(a-b);
        break;
    case "*":
        console.log(a*b);
        break;
    case "/":
        console.log(a/b);
        break;
    case "%":
        console.log(a%b);
        break;
    default:
        console.log("You didn't enter right operator plz do it again");
}

//Task-04
let age = 61;

if (age < 18){
    console.log("Total price is $3");
}

else if (age >= 18 && age <= 60){
    console.log("Total price $10");
}

else{
    console.log("Total price $8");
}

//Task-05
let month = "may"; 

switch (month) {
    case "january":
        console.log("Aquarius");
        break;
    case "february":
        console.log("Pisces");
        break;
    case "march":
        console.log("Aries");
        break;
    case "april":
        console.log("Taurus");
        break;
    case "may":
        console.log("Gemini");
        break;
    case "june":
        console.log("Cancer");
        break;
    case "july":
        console.log("Leo");
        break;
    case "august":
        console.log("Virgo");
        break;
    case "september":
        console.log("Libra");
        break;
    case "october":
        console.log("Scorpio");
        break;
    case "november":
        console.log("Sagittarius");
        break;
    case "december":
        console.log("Capricorn");
        break;
    default:
        console.log("Invalid Month");
}

// Task - 06
let tragSide1 = 20;
let tragSide2 = 10;
let tragSide3 = 10;

if (tragSide1 === tragSide2 && tragSide2 === tragSide3){
    console.log("Equilateral Triangle");
}

else if (tragSide1 === tragSide2 || tragSide2 === tragSide3){
    console.log("Isosceles Triangle");
}

else{
    console.log("Scalene Triangle")
}