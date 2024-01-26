let value = true;
console.log(typeof value); // boolean
value = String(value); // теперь value это строка "true"
console.log(typeof value); // string

let str = "123";
console.log(typeof str); // string
let num = Number(str); // становится числом 123
console.log(typeof num); // number

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("Привет!")); // true
console.log(Boolean("")); // false
