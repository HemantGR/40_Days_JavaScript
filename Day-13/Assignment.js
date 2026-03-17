"use-strict";
console.log("Day 13 JavaScript Assignment");

//task-02

// const user = {
//   name: "tapaScript",
//   greet: () => {
//     console.log(`Hello, ${this.name}!`); //The problem is that the arrow function () => {} does not have its own this
//   },
// };

const user = {
  name: "tapaScript",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

user.greet(); // Hello, tapaScript!

//Task - 03
const obj = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

// const greetFn = obj.greet; //The problem here is implicit this binding is lost when the method is extracted from the object.
const greetFn = () => obj.greet();
greetFn();

//Task - 04
// const user2 = {
//   name: "Alex",
//   greet: function () {
//     function inner() {
//       console.log(`Hello, ${this.name}!`); //Regular functions determine this based on how they’re called. Since inner() is called standalone, it loses the user context.
//     }
//     inner();
//   },
// };

const user2 = {
  name: "Alex",
  greet: function () {
    const inner = () => {
      console.log(`Hello, ${this.name}!`);
    };
    inner();
  },
};

user2.greet();

//Task - 05

function Sports(name, numberOfPlayers){
    this.name = name;
    this.numberOfPlayers = numberOfPlayers;
}

const cricket = new Sports("Cricket",11);
console.log(`${cricket.name} has ${cricket.numberOfPlayers} players.`);

const football = new Sports("Football",11);
console.log(`${football.name} has ${football.numberOfPlayers} players.`);

//Task-06
// Can you attach the car1's describe() method to car2 object? Give all possible solutions that you can think of

const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};

const describeCar2 = car1.describe.bind(car2);
describeCar2();

car1.describe.call(car2);
car1.describe.apply(car2);

//Task - 07
const person = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

person.sayHello();
person.sayHelloArrow();

//B: "Charlie" and undefined Arrow functions inherit this from where they're written; regular functions inherit this from how they're called.
