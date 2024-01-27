let year = prompt(
  "В каком году была опубликована спецификация ECMAScript-2015?",
  ""
);

if (year == 2015) console.log("Вы правы!");

if (year == 2015) {
  console.log("Правильно!");
  console.log("Вы такой умный!");
}

if (0) {
  console.log("Этот блок не выполнится");
}

if (1) {
  console.log("Этот блок выполнится!");
}

if (year == 2015) {
  console.log("Да вы знаток!");
} else {
  console.log("А вот и неправильно!");
}

if (year < 2015) {
  console.log("Это слишком рано...");
} else if (year > 2015) {
  console.log("Это поздновато");
} else {
  console.log("Верно!");
}

let accessAllowed = age > 18 ? true : false;

let message =
  age < 3
    ? "Здравствуй!"
    : age < 18
    ? "Привет!"
    : age < 100
    ? "Здравствуйте!"
    : "Какой необычный возраст!";

let company = prompt("Какая компания создала JavaScript?", "");

company == "Netscape" ? alert("Верно!") : alert("Неправильно.");
