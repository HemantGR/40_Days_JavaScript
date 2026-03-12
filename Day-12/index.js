console.log("Day 12 JavaScript");

//creating obj
let person = {
    first_name: "Hemant",
    age: 23,
    "is student": true,
}

console.log(person);

// Dot Notation and Bracket Notaion
console.log("User Name accessed using . notation",person.first_name);
console.log("User Student Status using Bracket Notation",person["is student"]);

//Add, Modify and Delete in object

//Add key in obj
person.course = "JavaScript"; //we can also add like this object["key name"] = value;
console.log(person) 

//Modify
person.age = 24; //we can also modify like this object["key name"] = value;
console.log(person);

//Delete
delete person.course; //we can also delete like this delete object["key name"];
console.log(person);

//Constructor Functions
function Car(name, model){
    this.name = name;
    this.model = model;
}

const myCar = new Car("Honda Amaze", 2023);
console.log(myCar);

const anotherCar = new Car("Skoda Rapid", 2022);
console.log(anotherCar);


//new Object() Constructor
const person2 = new Object()
person2.name = "Tapas";
person2.age = 28;

console.log(person2);

function createUser(name, age){
    return{
        name, //if you want to display diff than name you can write it like user_name : name like this
        age,
    }
}

const user1 = createUser("Vijay", 29);
console.log(user1);

//Object Methods & Nested Objects

let profile = {
    name: "Hemant",
    address:{
        city: "Punjab",
        country: "India"
    },
    greet: function(){
        console.log("Hello",this.name);
    },
    salary:undefined
}

console.log(profile.address.city);
profile.greet();

//in Operator

//Do not use if (profile.salary) to check if a property exists. 
// //If the salary exists but is explicitly set to undefined or 0 (falsy), the check will fail. Use the in operator instead.

if(!profile.salary){
    console.log("User salary doesn't exist");
    console.log("In if else statement",Boolean(profile.salary));
}

console.log("using in operator","salary" in profile);