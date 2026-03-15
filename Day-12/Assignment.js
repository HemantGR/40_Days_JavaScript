console.log("Day 12 Assignment");

//Task - 01
//What will be the output and why?

const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");

//Sol: The ?? operator returns the right-hand side only when the left side is null or undefined. Since age is undefined, it prints "Not provided".

//Task-02

//What will happen if we try to modify a frozen object?
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);

//It will remain intact as we cannot modify a frozen obj

//Task-03
//Given an object with deeply nested properties, extract name, company, and address.city using destructuring
const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107"
    }
  }
};

const {name, company:{name: companyName}, company:{location:{city}}} = person;
console.log(name, companyName, city);

//Task-04
//Build a Student Management System

const student1 = {
    name: "Hemant",
    age: 23,
    grade:{
        english: 22,
        maths:25,
        computer_science: 23,
    }
}

function getGrade(student){
    const {name, age, grade} = student;
    let sum = 0;

    for(let subject in grade){
        sum += grade[subject];
    };

    const avg = sum / Object.keys(grade).length;
    console.log(`Student Name ${name} and age: ${age}`);
    console.log("The average grade is: ",avg.toFixed(2));
}

getGrade(student1);

//Task - 5
// Book Store Inventory System
// Store books in an object.
// Add functionality to check availability and restock books.

const bookStore = {
    "Harry Potter": 5,
    "Atomic Habits": 3,
    "Rich Dad Poor Dad": 0
};

function bookStoreInventory(bookStore){

    return {
        checkAvailability: (book) => {

            if (!(book in bookStore)) {
                console.log(`We do not carry "${book}" in our store.`);
            }

            if (bookStore[book] <= 0){
                console.log(book,"is is not available");
            }else{
                console.log(`${book} is available and we have ${bookStore[book]} copies of it`);
            }
        },

        restock: (book, quantity) => {
            bookStore[book] += quantity;
        }
    }
}

const myStore = bookStoreInventory(bookStore);
myStore.checkAvailability("Harry Potter");
myStore.checkAvailability("Rich Dad Poor Dad");
myStore.checkAvailability("The Hobbit");

myStore.restock("Harry Potter", 10);
myStore.checkAvailability("Harry Potter");

//Task - 06
//What is the difference between Object.keys() and Object.entries()? Explain with examples

//Object.keys()
//This is the Object Static method which gives us all the keys present in the object

const obj1 = {
    name: "Dara Singh",
    age: 79,
    address:{
        city:"Punjab",
        country:"India"
    }
}

console.log(Object.keys(obj1));

//Object.entries()
// This is the Object Static method which allow object to convert it into an array

console.log(Object.entries(obj1));

//Task-07
// How do you check if an object has a certain property?

const obj2 = {
    name: "chetan kappor",
    age: 29
}

console.log(obj2.hasOwnProperty("name"));

//Task-08
// What will be the output and why?
const person1 = { name: "John" };
const newPerson = person1;
newPerson.name = "Doe";
console.log(person1.name);

//Doe as it person1 and newPerson are refering to same memory due to which if you change newPerson it will reflect on person1 also

//Task=09 
//What’s the best way to deeply copy a nested object? Expalin with examples

const obj3 = {
    name: "Tapas",
    company: {
        name: "tapaScript",
        location: {
            city: "Bangalore",
            zip: "94107"
        }
    }
}

const obj4 = structuredClone(obj3);
console.log(obj4);

//Task-10
// Loop and print values using Object destructuiring

const users = [
  {
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  {
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  {
      'name': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];

for (const { name, address, age } of users) {
    console.log(`Name: ${name}, Address: ${address}, Age: ${age}`);
}