class Animal {
  constructor(nickname, breed, color, sound, typeAnimal) {
    this.nickname = nickname;
    this.breed = breed;
    this.color = color;
    this.sound = sound;
    this.typeAnimal = typeAnimal;
  }

  returnInfoAnimal() {
    return `Имя ${this.nickname} || Порода ${this.breed} || Цвет ${this.color} || ${this.typeAnimal}`;
  }

  playSound() {
    return this.sound;
  }
}

class Cat extends Animal {
  constructor(nickname, breed, color, sound, scratchesDamage, typeAnimal) {
    super(nickname, breed, color, sound, typeAnimal);
    this.scratchesDamage = scratchesDamage;
  }
}

class Dog extends Animal {
  constructor(nickname, breed, color, sound, biteDamage, typeAnimal) {
    super(nickname, breed, color, sound, typeAnimal);
    this.biteDamage = biteDamage;
  }
}

const genady = new Cat("Генадий", "Черная", "Черный", "Мяу", 20, "Кошка");
const sharik = new Dog("Шарик", "Дворняга", "Белый", "Гав", 50, "Собака");

console.log(genady.returnInfoAnimal());
console.log(genady.playSound());
console.log("************************");
console.log(sharik.returnInfoAnimal());
console.log(sharik.playSound());
console.log("************************");
