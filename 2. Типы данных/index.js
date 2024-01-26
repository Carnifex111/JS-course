let message = "hello";
message = 123456;

let n = 123;
n = 12.345;
console.log(1 / 0); // Infinity
console.log("не число" / 2); // NaN

const bigInt = 1234567890123456789012345678901234567890n;

let str = "Привет";
let phrase = `Обратные кавычки позволяют встраивать переменные, как ${str}`;

let isGreater = 4 > 1;
console.log(isGreater); // true

let age = null;
let height;
console.log(height); // undefined

typeof 0; // "number"
typeof true; // "boolean"
typeof "foo"; // "string"
typeof Symbol("id"); // "symbol"
typeof Math; // "object"
typeof null; // "object" (да, это ошибка в языке)
