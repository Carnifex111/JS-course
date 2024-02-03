function sayHi() {
  // Function Declaration
  alert("Привет");
}

let func = sayHi; // Копирование функции в другую переменную

func(); // Привет
sayHi(); // Привет

let sayHi;

if (user.isAdmin) {
  sayHi = function () {
    alert("Привет, админ");
  };
} else {
  sayHi = function () {
    alert("Привет, пользователь");
  };
}

sayHi(); // Вызывает одну из двух функций в зависимости от условия

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Вы согласны?",
  function () {
    alert("Вы согласились.");
  },
  function () {
    alert("Вы отказались.");
  }
);
