console.log("Day 14 Assignment");

//Task-01
try {
    let r = p + 50;
    console.log(r);
} catch (error) {
    console.log("An error occurred:", error.name);
}

//Answer ReferenceError as P is not declared

//Task-02
function processPayment(amount){
    let balance = 1000;

    try{
        if(amount>balance) throw new Error("Insufficient Funds");
        if(amount<=0) throw new Error("Invalid Amount");
    }catch(error){
        console.error(error.message);
    }
}

processPayment(1500);

//Task -03
// Implement a custom error handling system for an e-commerce website that categorizes errors as
// UserError
// PaymentError
// ServerError
// EmailError

function UserError(message) {
    this.name = "UserError";
    this.message = message;
}

function PaymentError(message){
    this.name = "PaymentError";
    this.message = message;
}

function ServerError(message){
    this.name = "ServerError";
    this.message = message;
}

function EmailError(message){
    this.name = "EmailError";
    this.message = message;
}

const userName = "Pravin";
const amount = 100;
const email = "some@somewhere.com";
const server = false;

try {
    if(!userName) throw new UserError("Username is required");
    if(!email.includes("@")) throw new EmailError("Invalid email format");
    if(amount > 1000) throw new PaymentError("Payment amount exceeds limit");
    if(!server) throw new ServerError("Server is down");
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
}

//Task - 04
//Simulate an API call function fetchData(url). If the URL does not start with "https", throw an "Invalid URL" error. Handle it using try...catch

function fetchData(url) {
    if (!url.startsWith("https")) {
        throw new Error("Invalid URL");
    }
    console.log(url);
}

try {
    fetchData("http://example.com");
} catch (error) {
    console.error(error.message);
}

//Task - 05
//Implement a custom error type ValidationError using constructor functions to handle form validation errors

const userInput = { username: "", age: 2 };

// Output:
// ValidationError: Username cannot be empty
// ValidationError: Age must be a positive number

function ValidationError(message) {
  this.name = "ValidationError:",
    this.message = message
}

function validateUser(userInput) {

  if (!userInput.username) throw new ValidationError("Provide user name");
  if (userInput.age < 0) throw new ValidationError("Age must be a positive number.");
  return "New user created."

}

try {
  const message = validateUser(userInput);
  console.log(message);
}
catch (error) {
  console.error(error.name, error.message);
}

//Task-06
//Write a function readFile(filePath) that simulates reading a file. If the file does not exist (simulate with a condition), 
// throw a "File not found" error. Handle the error with try...catch. Make sure you have code to handle releasing the IO resources

function readFile(filePath) {
    if(!filePath) throw new Error("File not found");
    console.log("Reading the file");
    console.log("File read successfully");
}

try{
    readFile();
}catch(error){
    console.error(error.message);
}

//Task - 07
//Write a function parseJson(str) that takes a JSON string and tries to parse it using JSON.parse(). 
// If parsing fails, catch the error and return "Invalid JSON"

function parseJson(str) {
    try {
        return JSON.parse(str);
    } catch (error){
        return "Invalid JSON";
    }

}

const validData = '{"name": "Alex", "age": 25}';
console.log("Test 1:", parseJson(validData)); 

const invalidData = '{name: "Alex"}';
console.log("Test 2:", parseJson(invalidData)); 

//Task - 08
// 8. What is the purpose of throw in JavaScript?
// It catches an error.
// It stops the execution of a program.
// It creates a new error manually.
// It prints an error message.

// Answer: It creates a new error manually.

//Task - 09
// What does the finally block do in a try...catch statement?
// Runs only if an error occurs
// Runs only if no error occurs
// Runs regardless of whether an error occurs or not
// Stops the execution of the script

//Answer: Runs regardless of whether an error occurs or not

