// let person = {
//   name: "Alice",
//   greet() {
//     alert("Hello, my name is " + this.name + "!");
//   },
// };

// person.greet(); // Выводит: "Hello, my name is Alice!"

// let person = {
//   name: "Bob",
//   greet() {
//     alert("Hello, my name is " + this.name + "!");
//   },
// };

// let user = {
//   name: "Elena",
//   age: 25,
//   introduceSelf() {
//     alert(`My name is ${this.name} and I am ${this.age} years old.`);
//   },
// };

// user.introduceSelf(); // My name is Elena and I am 25 years old.

let person = {
  name: "Sophia",
  introduceSelf: function () {
    let greeting = () => alert(`Hello, my name is ${this.name}`);
    greeting();
  },
};

person.introduceSelf(); // Hello, my name is Sophia
