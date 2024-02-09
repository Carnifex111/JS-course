let message = "Привет!";
let phrase = message;

// let user = { name: "John" };
// let admin = user;

// admin.name = "Pete"; // изменение через ссылку "admin"

// alert(user.name); // 'Pete' - изменения видны через ссылку "user"

// // let a = {};
// // let b = a; // копирование по ссылке

// // alert(a == b); // true, т.к. a и b ссылаются на один и тот же объект
// // alert(a === b); // true

// let a = {};
// let b = {}; // два независимых объекта

// alert(a == b); // false

// let user = { name: "John", age: 30 };
// let clone = {}; // новый пустой объект

// for (let key in user) {
//   clone[key] = user[key];
// }

// let clone = Object.assign({}, user);

// let user = {
//   name: "John",
//   sizes: {
//     height: 182,
//     width: 50,
//   },
// };

// let clone = Object.assign({}, user);

// user.sizes.width++; // изменяем свойство в оригинале
// alert(clone.sizes.width); // 51, изменения видны и в клоне

const user = {
  name: "John",
};

user.name = "Pete"; // работает
