let x = 5;
x = -x; // унарный минус меняет знак числа на противоположный
console.log(x); // -5

let a = 1,
  y = 3;
console.log(y - a); // 2, бинарный минус вычитает одно число из другого

console.log(1 + 2); // 3
console.log("Java" + "Script"); // JavaScript

console.log(5 - 2); // 3

console.log(3 * 2); // 6

console.log(6 / 3); // 2

console.log(5 % 2); // 1

console.log(2 ** 3); // 8

let value = "5";
console.log(+value); // 5, как число

console.log(2 + 2 * 2); // 6, умножение выполняется первым

let c, d;
c = d = 5;
console.log(c); // 5
console.log(d); // 5

let counter = 0;
counter++;
console.log(counter); // 1

let counter_one = 1;
counter_one--;
console.log(counter_one); // 0

let n = 2;
n += 5; // то же, что и n = n + 5
n *= 2; // то же, что и n = n * 2
console.log(n); // 14

// Информация о фильмах
let movie1Name = "Interstellar";
let movie1Rating = 9;
let movie1Year = 2014;

let movie2Name = "Inception";
let movie2Rating = 8.5;
let movie2Year = 2010;

let movie3Name = "The Prestige";
let movie3Rating = 8.3;
let movie3Year = 2006;

// Расчет среднего рейтинга
let averageRating = (movie1Rating + movie2Rating + movie3Rating) / 3;

// Вывод информации
console.log(
  "Фильм 1: " + movie1Name + " (" + movie1Year + "), Рейтинг: " + movie1Rating
);
console.log(
  "Фильм 2: " + movie2Name + " (" + movie2Year + "), Рейтинг: " + movie2Rating
);
console.log(
  "Фильм 3: " + movie3Name + " (" + movie3Year + "), Рейтинг: " + movie3Rating
);
console.log("Средний рейтинг: " + averageRating.toFixed(1));
