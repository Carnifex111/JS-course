function Animal(name) {
  this.name = name;
  this.canWalk = true;
}

let dog = new Animal("Buddy");
alert(dog.name); // Выведет "Buddy"

function Person(name) {
  this.name = name;

  this.greet = function () {
    alert("Hello, my name is " + this.name);
  };
}

let alice = new Person("Alice");
alice.greet(); // Выведет "Hello, my name is Alice"

function Car(model) {
  if (!new.target) {
    return new Car(model); // автоматически добавляет new, если вызов произведён без него
  }
  this.model = model;
}

let tesla = Car("Tesla"); // Работает так же, как и new Car("Tesla");
alert(tesla.model); // Tesla

function Bike(model) {
  this.model = model;

  return { model: "Ducati" }; // Этот объект будет возвращён вместо созданного конструктором
}

let myBike = new Bike("Honda");
alert(myBike.model); // Ducati

// задача
// Шаг 1: Определение функции-конструктора Phone
function Phone(model, color) {
  // Шаг 2: Инициализация свойств model и color
  this.model = model;
  this.color = color;

  // Шаг 3: Добавление метода describe
  this.describe = function () {
    console.log("Это " + this.color + " телефон модели " + this.model + ".");
  };
}

// Шаг 4: Создание объекта myPhone с использованием конструктора Phone
let myPhone = new Phone("iPhone 12", "чёрный");

// Шаг 5: Вызов метода describe для объекта myPhone
myPhone.describe(); // Должен вывести: "Это чёрный телефон модели iPhone 12."
