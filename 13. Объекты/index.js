let user = {
  name: "John",
  age: 30,
};

console.log(user.name); // John
console.log(user["age"]); // 30

user.isAdmin = true;
delete user.age;

let key = "likes birds";
user[key] = true;

let fruit = "apple";
let bag = {
  [fruit]: 5,
};
alert(bag.apple); // 5

function makeUser(name, age) {
  return {
    name,
    age,
  };
}

if ("age" in user) {
  alert("Свойство age существует!");
}

for (let key in user) {
  alert(key); // имя свойства
  alert(user[key]); // значение свойства
}
