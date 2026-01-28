//Task-01

for(let i = 1; i<=5; i++){
    let row = ""
    for(let j = 1; j<=i; j++){
        row+="* "
    }
    console.log(row)
}

//Task-02
let N = 3
for(let i = 1; i<=10; i++){
   console.log(N, " x ", i, " = ", N * i)
}

//Task-03
let sum1 = 0
for (let i = 0; i <= 500; i++) {
    if (i % 2 != 0) {
        sum1 += i;
    }
}

console.log("Sum of odd number till 500 is",sum1);

//Task-04
for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0) {
        continue
    }

    console.log(i)
}

//Task-05
let number = "298388";
let length = number.length
let rev_num = ""

while (length > 0){
    rev_num+= number.charAt(length-1);
    length--;
}

console.log("Normal",number)
console.log("Reverse",rev_num)
