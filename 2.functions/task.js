"use strict";

// Задача 1: Исследовать массив

// Функция для получения параметров массива
function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  // Поиск минимального, максимального значения и вычисление суммы элементов
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    min = Math.min(min, element);
    max = Math.max(max, element);
    sum += element;
  }

  // Вычисление среднего значения и округление до двух знаков после запятой
  const avg = (sum / arr.length).toFixed(2);

  return { min, max, avg: Number(avg) }; 
}

// Тесты для задачи 1
function testGetArrayParams() {
  const testCases = [
    { arr: [-99, 99, 10], expected: { min: -99, max: 99, avg: 3.33 } },
    { arr: [1, 2, 3, -100, 10], expected: { min: -100, max: 10, avg: -16.80 } },
    { arr: [5], expected: { min: 5, max: 5, avg: 5.00 } },
  ];

  console.log("// Тесты для задачи 1: Исследовать массив");

  for (let i = 0; i < testCases.length; i++) {
    const { arr, expected } = testCases[i];
    const result = getArrayParams(...arr);
    console.log(`Test Case ${i + 1}:`, result);
    console.log("Expected:", expected);
    console.log("Pass:", JSON.stringify(result) === JSON.stringify(expected));
    console.log("-----------------------");
  }
}

console.log("Задача 1: Исследовать массив");
testGetArrayParams();

// Задача 2: Насадки преобразователи

// Функция для суммирования элементов массива
function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr.reduce((sum, num) => sum + num, 0);
}

// Функция для вычисления разницы максимального и минимального элементов массива
function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  const max = Math.max(...arr);
  const min = Math.min(...arr);

  return max - min;
}

// Функция для вычисления разницы сумм чётных и нечётных элементов массива
function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

// Функция для вычисления среднего значения чётных элементов массива
function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement;
}

// Тесты для задачи 2
console.log("Задача 2: Насадки преобразователи");

// Насадка суммирования элементов
console.log("Насадка суммирования элементов");
console.log("Test Case 1:", summElementsWorker()); // ожидаемый результат: 0
console.log("Test Case 2:", summElementsWorker(10, 10, 11, 20, 10)); // ожидаемый результат: 61
console.log("Test Case 3:", summElementsWorker(0, 0, 0, -1, -100)); // ожидаемый результат: -101
console.log("-----------------------");

// Насадка вычисления разницы максимального и минимального элементов
console.log("Насадка вычисления разницы максимального и минимального элементов");
console.log("Test Case 1:", differenceMaxMinWorker()); // ожидаемый результат: 0
console.log("Test Case 2:", differenceMaxMinWorker(10, 10, 11, 20, 10)); // ожидаемый результат: 10
console.log("Test Case 3:", differenceMaxMinWorker(0, 0, 0, -1, -100)); // ожидаемый результат: 100
console.log("-----------------------");

// Насадка вычисления разницы сумм чётных и нечётных элементов
console.log("Насадка вычисления разницы сумм чётных и нечётных элементов");
console.log("Test Case 1:", differenceEvenOddWorker()); // ожидаемый результат: 0
console.log("Test Case 2:", differenceEvenOddWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // ожидаемый результат: -5
console.log("Test Case 3:", differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // ожидаемый результат: 53
console.log("Test Case 4:", differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // ожидаемый результат: -269
console.log("-----------------------");

// Насадка вычисления среднего значения чётных элементов
console.log("Насадка вычисления среднего значения чётных элементов");
console.log("Test Case 1:", averageEvenElementsWorker()); // ожидаемый результат: 0
console.log("Test Case 2:", averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // ожидаемый результат: 5
console.log("Test Case 3:", averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // ожидаемый результат: 38
console.log("-----------------------");

// Задача 3: Агрегатор преобразователей

// Функция для выполнения преобразования над массивом
function makeWork(arrOfArr, func) {
  // Проверяем, является ли arrOfArr массивом и имеет ли он элементы
  if (!Array.isArray(arrOfArr) || arrOfArr.length === 0) {
    return null;
  }

  let maxWorkerResult = -Infinity;

  // Итерируемся по каждому подмассиву в arrOfArr
  for (const arr of arrOfArr) {
    // Проверяем, является ли arr подмассивом и имеет ли он элементы
    if (!Array.isArray(arr) || arr.length === 0) {
      continue;
    }

    // Выполняем функцию func с аргументами из arr
    const result = func(...arr);

    // Обновляем максимальное значение, если полученный результат больше текущего максимального значения
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  // Возвращаем максимальное значение
  return maxWorkerResult;
}

console.log("Задача 3: Агрегатор преобразователей");

const arr = [
  [10, 10, 11, 20, 10],
  [67, 10, 2, 39, 88],
  [72, 75, 51, 87, 43],
  [30, 41, 55, 96, 62],
];

// Насадка суммирования значений
const expectedResult1 = 328;
const result1 = makeWork(arr, summElementsWorker);
console.log("Насадка суммирования значений:");
console.log("Expected:", expectedResult1);
console.log("Result:", result1);
console.log("Pass:", result1 === expectedResult1);
console.log("-----------------------");

// Насадка разницы элементов
const expectedResult2 = 86;
const result2 = makeWork(arr, differenceMaxMinWorker);
console.log("Насадка разницы элементов:");
console.log("Expected:", expectedResult2);
console.log("Result:", result2);
console.log("Pass:", result2 === expectedResult2);
console.log("-----------------------");

// Насадка разницы чётных и нечётных элементов
const expectedResult3 = 92;
const result3 = makeWork(arr, differenceEvenOddWorker);
console.log("Насадка разницы чётных и нечётных элементов:");
console.log("Expected:", expectedResult3);
console.log("Result:", result3);
console.log("Pass:", result3 === expectedResult3);
console.log("-----------------------");

// Насадка среднего значения чётных элементов
const expectedResult4 = 72;
const result4 = makeWork(arr, averageEvenElementsWorker);
console.log("Насадка среднего значения чётных элементов:");
console.log("Expected:", expectedResult4);
console.log("Result:", result4);
console.log("Pass:", result4 === expectedResult4);
console.log("-----------------------");