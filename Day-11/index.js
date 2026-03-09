console.log("Day 11 JavaScript");

//Function withour Closures
function outer(){
    let x = 10;

    function inner(){
        console.log(x);
    }
    inner();
}

outer();
// console.log(x);

//Function with Closures

function outer2(){
    let x = 10;

    return function inner(){
        console.log(x);
    }
}

const res = outer2();
console.log(res)
res();


//Count Closure
function outerCount(){
    let count = 0;

    return function inner(){
        count++;
        console.log(count);
    }
}

const res2 = outerCount();
res2(); //1
res2(); //2
res2(); //3

// Real World Example

function createBankAccount(initialBalance){
    let balance = initialBalance;

    return {
        deposte: (amount) =>{
            balance += amount;
        },

        withdraw: (amount) =>{
            if(amount > balance){
                console.log("Amount is greater than your balance please add lower amount");
            }
            balance-=amount;
        },

        checkoutBalance: ()=>{
            console.log(`Your balance is ${balance}`);
        }
    }
}

const user1 = createBankAccount(1000);
console.log(user1.checkoutBalance());
user1.deposte(200); 
console.log(user1.checkoutBalance()); // 1200
user1.deposte(300);
console.log(user1.checkoutBalance()); // 1500   

user1.withdraw(500);
console.log(user1.checkoutBalance()); // 1000




function dealingWithBigData() {
    let bigData = new Array(10000000).fill("*")

    return function() {
        console.log(bigData[3])
    }
}

const variable12 = dealingWithBigData();

console.log(variable12())


// Usefulness of Closure

// 1. You can keep the variables private without exposing them.
// 2. You can stop variable pollution.
// 3. You can create a function factory.
// 4. You can keep a variable alive between multiple calls.

function timer() {
    let secs = 0;

    return function() {
        secs++;
        console.log("elaspsed seconds ", secs)
    }
}

const timerInstance = timer();
timerInstance(); // 1
timerInstance(); // 2
timerInstance(); // 3


// Closure in Event handler

function setupButton() {
    let clickCount = 0;

    document.getElementById("myButton").addEventListener("click", function() {
        clickCount++;
        console.log(`Button clicked ${clickCount} times`);
    });
}

setupButton();