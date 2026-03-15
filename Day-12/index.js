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
//If the salary exists but is explicitly set to undefined or 0 (falsy), the check will fail. Use the in operator instead.

if(!profile.salary){
    console.log("User salary doesn't exist");
    console.log("In if else statement",Boolean(profile.salary));
}

console.log("using in operator","salary" in profile);

//for in loop

for(let key in profile){
    console.log("For in loop key value",key);
    console.log("For in loop object[key]",profile[key]);
}

//Memory reference
let fruit = { name: "Mango" }
let anotherfruit = {name: "Mango"}

console.log(fruit === anotherfruit); //false


let fruit2 = { name: "Mango" }
let anotherfruit2 = fruit2

console.log(fruit2 === anotherfruit2); //true



//Deep copy vs Shallow copy

//Shallow Copy
const obj3 = { a: 1, b: { c: 2 } };
const obj4 = Object.assign({}, obj3);

obj4.a = 2;
console.log("Shallow Copy");
console.log(obj3);
console.log(obj4);

obj4.b.c = 3;
console.log(obj3);
console.log(obj4);

//Deep copy
const obj5 = structuredClone(obj3);
obj5.b.c = 300;

console.log("Deep Copy")
console.log(obj3);
console.log(obj5);

//Static Methods in obj
console.log(Object.keys(profile));
console.log(Object.entries(person));

Arr1 = [["first_name","Kabir"],["age",24]];
console.log(Object.fromEntries(Arr1));

obj6 = {
    first_name: "Karan",
    age: 23
};

Object.freeze(obj6);

obj6.age = 24;
console.log(obj6);

const dept = {
    name: "finance"
}

Object.seal(dept);

dept.address = "Bangalore"
delete dept.name;

dept.name = "HR"
console.log(dept)

console.log(Object.hasOwn(dept, "address"))


