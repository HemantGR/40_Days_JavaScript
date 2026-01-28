console.log("Day-05");

//for loop
for(let i = 1; i<=5; i++){  //for(initialization; condition; update)
    console.log("Iteration",i);
}

// Addition of even numbers between 1 to 100
let sum1 = 0
for (let i = 1; i <= 100; i++){
    if(i % 2 == 0){
        sum1 = sum1 + i
        // console.log(sum1) this is for testing purpose
    }
}

console.log("Sum of even number till hundered is:",sum1);

//Seeing what position does character hav

let lang = "Javascript";
for (let i = 0; i < lang.length; i++ ){
    console.log(lang.charAt(i)); //charAt is used to find what character is there at this position
}

//Nested loop
for(let i =1; i<=3; i++) {
    for(let j=1; j<=3; j++) {
        console.log("Row", i, "Col", j)
    }
}

//break and continue
for(let i=0; i<=10; i++){
    if(i==3){
        break;
    }
    console.log(i);
}

for(let i=0; i<=10; i++){
    if(i==3){
        continue;
    }
    console.log(i);
}

// Multiple Counters for single loop

for(let i=1, j=10; i<=10 && j>=1 ; i++, j--) {
    console.log(i, j);
}

//while loop
let counter = 1;
while (counter <= 5){ //while(condition)
    console.log(counter);
    counter++;
}

//Do while

let num = 1;
do {
    console.log(num);
    num++;
} while(num <=5)


// Infinite Loop

// for(;;){
//     console.log("I am looping forever!!!")
// }

// while(true) {

// }

// do {
//     // Code
// } while(true)