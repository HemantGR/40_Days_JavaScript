console.log("Day 14 JavaScript");

try{
    console.log("Execution starts here");
    abc;
    console.log("Execution ends here");
}
catch(err){
    console.error("An Error has occurred");
    console.log(err.name);    // "ReferenceError"
    console.log(err.message); // "abc is not defined"
    console.log(err.stack);   // Shows the exact line number where it failed
}

//Throwing Custom Errors

function divideNumbers(a,b){
    if(b==0){
        throw new Error("Cannot divide by zero");
    }

    return a/b;
}

try{
    let result = divideNumbers(10, 0);
    console.log(`The result is ${result}`);
}
catch(err){
    console.error(err.message);
}

//Rethrowing Errors

function validateForm(formData){
    try{
        if(!formData.username) throw new Error("Username is required");
        if (!formData.email.includes("@")) throw new Error("Invalid email format!");
    }catch (error) {
        console.error("Developer Log - Validation Issues Found:", error.message);
        throw error; // RETHROW: Send it up the chain!
    }
}

try {
    validateForm({ username: "Tapas", email: "bademail" });
} catch(error) {
    // This is what the actual User sees in a toast/popup
    console.error("Showing error message to user:", error.message); 
}

//Finally Block
function processInformation(information) {
    try {
        if (!information) throw new Error("No Information available");
        console.log("Information processed");
    } catch (error) {
        console.log("Error:", error.message);
    } finally {
        console.log("Cleanup: Closing database connection"); // Runs every time
    }
}

processInformation();

//Custom Error
function ValidationError(message) {
    this.name = "ValidationError";
    this.message = message;
    
    // Advanced: Link the stack trace to the native Error object
    // this.stack = new Error().stack; 
}

// 2. Use it in your code
function validateCitizen(age) {
    if (age < 60) {
        throw new ValidationError("You are not a senior citizen");
    }
    return "You are a senior citizen";
}

try {
    const message = validateCitizen(15);
} catch (error) {
    console.error(`${error.name}: ${error.message}`); 
    // Output: ValidationError: You are not a senior citizen
}