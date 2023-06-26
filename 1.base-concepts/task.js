"use strict";

// Задача №1: Решение квадратных уравнений

function solveEquation(a, b, c) {
  let arr = [];

  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    // Корней нет
    return arr;
  } else if (discriminant === 0) {
    // Один корень
    const root = -b / (2 * a);
    arr.push(root);
  } else {
    // Два корня
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(root1, root2);
  }

  return arr;
}

function testSolveEquation() {
  const testCases = [
    { a: 1, b: 5, c: 4, expected: [-1, -4] },
    { a: 1, b: 2, c: 1, expected: [-1] },
    { a: 1, b: 2, c: 10, expected: [] },
  ];

  for (let i = 0; i < testCases.length; i++) {
    const { a, b, c, expected } = testCases[i];
    const result = solveEquation(a, b, c);
    console.log(`Test Case ${i + 1}:`, result);
    console.log("Expected:", expected);
    console.log("Pass:", JSON.stringify(result) === JSON.stringify(expected));
    console.log("-----------------------");
  }
}

// Задача №2: Расчет выплат по ипотеке

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (
    typeof percent !== "number" ||
    typeof contribution !== "number" ||
    typeof amount !== "number" ||
    typeof countMonths !== "number"
  ) {
    return false;
  }

  const monthlyPercent = percent / 100 / 12;
  const loanAmount = amount - contribution;
  const monthlyPayment =
    loanAmount *
    (monthlyPercent +
      monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1));
  const totalPayment = monthlyPayment * countMonths;
  const roundedTotalPayment = Math.round(totalPayment * 100) / 100;

  return roundedTotalPayment;
}

function testCalculateTotalMortgage() {
  const testCases = [
    { percent: 10, contribution: 0, amount: 50000, countMonths: 12, expected: 52749.53 },
    { percent: 10, contribution: 1000, amount: 50000, countMonths: 12, expected: 51694.54 },
    { percent: 10, contribution: 20000, amount: 20000, countMonths: 48, expected: 0 },
    { percent: 10, contribution: 0, amount: 10000, countMonths: 36, expected: 11616.19 },
    { percent: 15, contribution: 0, amount: 10000, countMonths: 36, expected: 12479.52 },
  ];

  for (let i = 0; i < testCases.length; i++) {
    const { percent, contribution, amount, countMonths, expected } = testCases[i];
    const result = calculateTotalMortgage(percent, contribution, amount, countMonths);
    console.log(`Test Case ${i + 1}:`, result);
    console.log("Expected:", expected);
    console.log("Pass:", result === expected);
    console.log("-----------------------");
  }
}

// Запуск тестов

console.log("Тесты для задачи №1");
testSolveEquation();

console.log("Тесты для задачи №2");
testCalculateTotalMortgage();