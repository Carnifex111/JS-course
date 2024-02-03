function sayHello() {
  console.log("Привет, мир!");
}

sayHello(); // Выводит: Привет, мир!

function showMessage(message) {
  console.log(message);
}

showMessage("Привет, функция!"); // Выводит: Привет, функция!

function greet() {
  let greeting = "Привет из функции";
  console.log(greeting);
}

greet(); // Выводит: Привет из функции
// console.log(greeting); // Ошибка: greeting не определена

let userName = "Вася";

function greetUser() {
  console.log("Привет, " + userName);
}

greetUser(); // Выводит: Привет, Вася

function sum(a, b) {
  return a + b;
}

console.log(sum(5, 3)); // Выводит: 8

function greet(name = "друг") {
  console.log("Привет, " + name);
}

greet("Вася"); // Выводит: Привет, Вася
greet(); // Выводит: Привет, друг

function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

function isEven(num) {
  return num % 2 === 0;
}

function calculateTotalPrice(quantity, pricePerItem) {
  let total = quantity * pricePerItem;
  if (quantity > 10) {
    total -= total * 0.1; // Применяем скидку 10%
  }
  return total;
}

console.log(calculateTotalPrice(5, 100)); // Без скидки: 500
console.log(calculateTotalPrice(15, 100)); // Со скидкой: 1350

const sayHi = function () {
  alert("Привет");
};
