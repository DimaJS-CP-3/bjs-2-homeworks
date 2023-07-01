"use strict";

// Задача 1: Сравнить массивы

// Функция для сравнения массивов
function compareArrays(arr1, arr2) {
  // Проверяем длины массивов
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Используем метод every для сравнения элементов на соответствующих индексах
  const areEqual = arr1.every((value, index) => value === arr2[index]);

  // Возвращаем результат сравнения
  return areEqual;
}

console.log("Задача 1: Сравнить массивы");

// Тесты
console.log("Test Case 1:", compareArrays([1, 2, 3], [1, 2, 3]));
console.log("Test Case 2:", compareArrays([1, 2], [1, 2, 3]));
console.log("Test Case 3:", compareArrays([1, 2, 3], [3, 2, 1]));
console.log("Test Case 4:", compareArrays([0, 1, 2], [0, 1]));
console.log("Test Case 5:", compareArrays([0, 1], [0, 1, 2]));
console.log("Test Case 6:", compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]));

// Задача 2: Получение среднего возраста пользователей одного пола

const people = [
  {firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской"},
  {firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской"},
  {firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский"},
  {firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский"},
  {firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский"},
  {firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский"},
  {firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской"},
  {firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской"},
  {firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской"},
  {firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский"},
  {firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской"},
  {firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской"},
  {firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской"},
  {firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской"},
];

function getUsersNamesInAgeRange(users, gender) {
  // Фильтруем пользователей по полу
  const filteredUsers = users.filter(user => user.gender === gender);

  // Получаем массив возрастов
  const ages = filteredUsers.map(user => user.age);

  // Вычисляем среднее значение возраста
  const averageAge = ages.length > 0 ? ages.reduce((sum, age) => sum + age, 0) / ages.length : 0;

  // Возвращаем среднее значение возраста
  return averageAge;
}

// Тесты для задачи 2: Получение среднего возраста пользователей одного пола
console.log("Задача 2: Получение среднего возраста пользователей одного пола");
console.log("-----------------------------------");
console.log("Тест Case 1: Мужчины");
console.log("Ожидаемый результат: 32");
console.log("Фактический результат: " + getUsersNamesInAgeRange(people, "мужской"));
console.log("-----------------------------------");
console.log("Тест Case 2: Женщины");
console.log("Ожидаемый результат: 27.4");
console.log("Фактический результат: " + getUsersNamesInAgeRange(people, "женский"));
console.log("-----------------------------------");
console.log("Тест Case 3: Пустой массив");
console.log("Ожидаемый результат: 0");
console.log("Фактический результат: " + getUsersNamesInAgeRange([], "женский"));
console.log("-----------------------------------");
console.log("Тест Case 4: Инопланетянин");
console.log("Ожидаемый результат: 0");
console.log("Фактический результат: " + getUsersNamesInAgeRange(people, "инопланетянин"));
