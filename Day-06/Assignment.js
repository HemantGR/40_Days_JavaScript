//Task-01
function convertCeltoFahr(cel){
    return ((cel * 9/5) + 32);
}

console.log(32,"Celsius is equal to",convertCeltoFahr(32),"Fahrenheit");

//Task-02
function findMax(num1,num2){
    if (num1 === num2){
        return "both the numbers are same please retry";
    }

    else if (num1 > num2){
        return num1;
    }

    else{
        return num2;
    }
}

console.log("The maximum number is",findMax(21,10));

//Task-03
function checkPalindrone(stri){
    len = stri.length
    revstr = "";

    for (let i = len-1; i>=0; i--){
        revstr += stri.charAt(i);
    }
    
    if(stri === revstr){
        return "It's a palindrone string";
    }

    else{
        return "It's not a palindrone string";
    }

}
console.log(checkPalindrone("naman"));