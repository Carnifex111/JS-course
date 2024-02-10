let billion = 1e9; // 1 миллиард
console.log(billion); // 1000000000

let ms = 1e-6; // Одна миллионная
console.log(ms); // 0.000001

console.log(0xff); // 255 в шестнадцатеричной системе
console.log(0b11111111); // 255 в двоичной системе
console.log(0o377); // 255 в восьмеричной системе

let num = 10;
console.log(num.toString(2)); // "1010" двоичное представление

console.log(Math.floor(3.6)); // 3
console.log(Math.ceil(3.1)); // 4
console.log(Math.round(3.5)); // 4
console.log(Math.trunc(3.9)); // 3

console.log(0.1 + 0.2); // 0.30000000000000004

let sum = 0.1 + 0.2;
console.log(+sum.toFixed(2)); // 0.3

console.log(isNaN(NaN)); // true
console.log(isFinite(1 / 0)); // false

console.log(parseInt("100px", 10)); // 100
console.log(parseFloat("12.5em")); // 12.5
