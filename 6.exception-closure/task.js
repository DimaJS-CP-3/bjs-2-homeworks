// Задача 1: Форматтер чисел

// Функция для парсинга числа
function parseCount(num) {
  let parsedNum = Number.parseFloat(num);

  if (Number.isNaN(parsedNum)) {
    throw new Error("Невалидное значение");
  } else {
    return parsedNum;
  }
}

// Функция для валидации числа
function validateCount(num) {
  try {
    return parseCount(num);
  } catch (error) {
    return error; // Возвращаем объект ошибки без изменений
  }
}

// Задача 2: Треугольник

// Класс Triangle для создания треугольника
class Triangle {
  constructor(a, b, c) {
    // Проверяем существование треугольника
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error("Треугольник с такими сторонами не существует");
    } else {
      this.a = a;
      this.b = b;
      this.c = c;
    }
  }

  // Геттер для вычисления периметра треугольника
  get perimeter() {
    let p = this.a + this.b + this.c;
    return p;
  }

  // Геттер для вычисления площади треугольника
  get area() {
    let p = (this.a + this.b + this.c) / 2;
    let ar =
      Math.round(
        1000 * Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) +
          Number.EPSILON
      ) / 1000;
    return ar;
  }
}

// Функция для получения треугольника
function getTriangle(a, b, c) {
  try {
    let triangle = new Triangle(a, b, c);
    return triangle;
  } catch (error) {
    let errorObj = {
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
      get area() {
        return "Ошибка! Треугольник не существует";
      },
    };
    return errorObj;
  }
}

// Тесты

// Тесты для задачи 1
function testParseCount() {
  const validNum = "123";
  const invalidNum = "abc";

  try {
    console.log(parseCount(validNum)); // Ожидаемый результат: 123
    console.log(parseCount(invalidNum)); // Ожидаемый результат: Error: Невалидное значение
  } catch (error) {
    console.error(error);
  }
}

function testValidateCount() {
  const validNum = "123";
  const invalidNum = "abc";

  try {
    console.log(validateCount(validNum)); // Ожидаемый результат: 123
    console.log(validateCount(invalidNum)); // Ожидаемый результат: Error: Невалидное значение
  } catch (error) {
    console.error(error);
  }
}

// Тесты для задачи 2
function testTriangle() {
  const triangle1 = getTriangle(1, 3, 3);
  console.log(triangle1.perimeter); // Ожидаемый результат: 7
  console.log(triangle1.area); // Ожидаемый результат: 1.479

  const triangle2 = getTriangle(2, 5, 5);
  console.log(triangle2.perimeter); // Ожидаемый результат: 12
  console.log(triangle2.area); // Ожидаемый результат: 4.899

  const triangle3 = getTriangle(6, 10, 15);
  console.log(triangle3.perimeter); // Ожидаемый результат: 31
  console.log(triangle3.area); // Ожидаемый результат: 20.123

  const triangle4 = getTriangle(1, 3, 100);
  console.log(triangle4.perimeter); // Ожидаемый результат: "Ошибка! Треугольник не существует"
  console.log(triangle4.area); // Ожидаемый результат: "Ошибка! Треугольник не существует"
}

// Запуск тестов
testParseCount();
testValidateCount();
testTriangle();
