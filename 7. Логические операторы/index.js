let user = "";
let defaultUser = "Гость";
console.log(user || defaultUser); // "Гость"

let hour = 12;
let minute = 30;
if (hour == 12 && minute == 30) {
  console.log("Время 12:30");
}

let success = !false;
console.log(success); // true

let username = "shirov";

if (username !== "carnifex") {
  console.log(username); // shirov
}
