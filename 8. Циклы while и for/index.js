let sunShines = true;
let steps = 0; // Счетчик шагов прогулки

while (sunShines) {
  console.log("Гуляем в парке!");
  steps++;

  // Представим, что солнце заходит после трех шагов
  if (steps >= 3) {
    console.log("Солнце зашло, пора домой.");
    sunShines = false; // Это изменит условие и завершит цикл
  }
}

const totalExercises = 10;

for (let exercise = 1; exercise <= totalExercises; exercise++) {
  console.log(`Выполняем упражнение номер ${exercise}`);

  console.log("Упражнение выполнено!");

  console.log("Короткий перерыв...\n");
}

// Предположим, мы хотим выполнить каждое упражнение по 5 раз
const repetitions = 5;

for (let exercise = 1; exercise <= 10; exercise++) {
  console.log(`Упражнение номер ${exercise}:`);

  // Внутренний цикл для повторений упражнения
  for (let rep = 1; rep <= repetitions; rep++) {
    console.log(`    Повторение ${rep}`);
  }

  console.log("Перерыв между упражнениями.\n");
}

let continueExercise = true;
let exerciseCount = 0;

do {
  exerciseCount++;
  console.log(`Выполняем упражнение номер ${exerciseCount}.`);

  continueExercise =
    exerciseCount < 10 && confirm("Хотите продолжить утреннюю зарядку?");
} while (continueExercise);

console.log("Утренняя зарядка завершена.");

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("Нашли число 5, прерываем цикл.");
    break;
  }
  console.log(`Проверяем число ${i}.`);
}

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    // Если число чётное,
    continue; // пропускаем оставшуюся часть цикла.
  }
  console.log(`Нечетное число: ${i}.`);
}
