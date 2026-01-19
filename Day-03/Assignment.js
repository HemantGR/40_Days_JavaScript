//Task - 01
let tk1 = 11;
const res =(tk1 % 2 === 0) ? "Even" : "Odd";
console.log(tk1 + " is an " + res + " number.");

//Task - 02
let tk2 = 19;
const res2 =(tk2 >= 18) ? "You are eligible to drive" : "You are not eligible to drive"
console.log("Your age is " + tk2 + " so you are " + res2)

//Task - 03
let monthlySal = 12300;
let annualSal = monthlySal * 12;
const bonus = annualSal * (20/100);
const ctc = annualSal + bonus;
console.log("You make per annum as a CTC is", ctc);

//Task-04
let color = "Green";
let action = (color === "Red") ? "STOP" : "GO";

console.log(action);

//Task-05
let units = 100;

// 1. Calculate Monthly Bill
const monthlyBill = units * 150 * 30; 

// 2. Calculate Annual Bill (Before Discount)
const totalAnnualBill = monthlyBill * 12;

// 3. Apply 20% Discount on the TOTAL Annual Bill
// Formula: Total Year Cost - (Total Year Cost * 0.20)
const finalAnnualBill = totalAnnualBill - (totalAnnualBill * 0.2);

console.log("Monthly Bill: " + monthlyBill); 
console.log("Discounted Annual Bill: " + finalAnnualBill);

//Task -06
let year = 2025;
let res6 = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0) ? "is a leap year" : "is not a leap year";

console.log(year + " " + res6);

//Task-07
let p = 10;
let q = 50;
let r = 25;

let max = (p > q) ? ((p > r) ? p : r) : ((q > r) ? q : r);


console.log("The numbers are: " + p + ", " + q + ", " + r);
console.log("The maximum number is: " + max);

//Task-08
let count = 5;
console.log(count << 1)