let arr = ["Яблоко", "Апельсин", "Слива"];

let arr2 = new Array("Яблоко", "Апельсин", "Слива");

let fruits = ["Яблоко", "Апельсин", "Слива"];

console.log(fruits[0]); // Яблоко
fruits[2] = "Груша"; // изменение элемента
fruits[3] = "Лимон"; // добавление нового элемента

// let fruits = ["Apple", "Banana"];
// fruits.push("Orange");
// console.log(fruits); // Вывод: ["Apple", "Banana", "Orange"]

// let fruits = ["Banana", "Orange"];
// fruits.unshift("Apple");
// console.log(fruits); // Вывод: ["Apple", "Banana", "Orange"]

// let fruits = ["Apple", "Banana", "Orange"];
// let last = fruits.pop();
// console.log(fruits); // Вывод: ["Apple", "Banana"]
// console.log(last); // Вывод: "Orange"

// let fruits = ["Apple", "Banana", "Orange"];
// let first = fruits.shift();
// console.log(fruits); // Вывод: ["Banana", "Orange"]
// console.log(first); // Вывод: "Apple"

// let fruits = ["Apple", "Banana", "Orange"];
// fruits.splice(1, 1); // Удаляет "Banana"
// console.log(fruits); // Вывод: ["Apple", "Orange"]

// let fruits = ["Apple", "Banana", "Orange"];
// fruits.splice(1, 1, "Mango"); // Заменяет "Banana" на "Mango"
// console.log(fruits); // Вывод: ["Apple", "Mango", "Orange"]

// let fruits = ["Apple", "Banana"];
// fruits.splice(1, 0, "Orange"); // Вставляет "Orange" перед "Banana"
// console.log(fruits); // Вывод: ["Apple", "Orange", "Banana"]

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let mergedArray = array1.concat(array2);
console.log(mergedArray); // Выведет [1, 2, 3, 4, 5, 6]

["apple", "banana", "orange"].forEach((fruit, index) => {
  console.log(`${index + 1}: ${fruit}`);
});

// let numbers = [1, 2, 3, 4, 5];
// let doubledNumbers = numbers.map((number) => number * 2);
// console.log(doubledNumbers); // Выведет [2, 4, 6, 8, 10]

let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers); // Выведет [1, 2, 3, 4, 5]

numbers.reverse();
console.log(numbers); // Выведет [5, 4, 3, 2, 1]

let namesString = "John,Pete,Mary";
let namesArray = namesString.split(",");
console.log(namesArray); // Выведет ["John", "Pete", "Mary"]

let namesBack;
