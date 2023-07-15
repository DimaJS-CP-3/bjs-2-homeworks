// Задача 1. Форматтер чисел

function parseCount(value) {
    const parsedValue = Number.parseFloat(value);
    if (isNaN(parsedValue)) {
      throw new Error("Невалидное значение");
    }
    return parsedValue;
  }
  
  function validateCount(value) {
    try {
      return parseCount(value);
    } catch (error) {
      throw error;
    }
  }
  
  // Тесты для функции parseCount
  function testParseCount() {
    try {
      const result1 = parseCount("123");
      if (result1 === 123) {
        console.log("Тест 'parseCount' 1 пройден");
      } else {
        console.error("Тест 'parseCount' 1 не пройден: неверный результат");
      }
    } catch (error) {
      console.error("Тест 'parseCount' 1 не пройден:", error.message);
    }
  
    try {
      const result2 = parseCount("012");
      if (result2 === 12) {
        console.log("Тест 'parseCount' 2 пройден");
      } else {
        console.error("Тест 'parseCount' 2 не пройден: неверный результат");
      }
    } catch (error) {
      console.error("Тест 'parseCount' 2 не пройден:", error.message);
    }
  }
  
  // Тесты для функции validateCount
  function testValidateCount() {
    try {
      const result3 = validateCount("56.65");
      if (result3 === 56.65) {
        console.log("Тест 'validateCount' 1 пройден");
      } else {
        console.error("Тест 'validateCount' 1 не пройден: неверный результат");
      }
    } catch (error) {
      console.error("Тест 'validateCount' 1 не пройден:", error.message);
    }
  
    try {
      parseCount("ыфва");
      console.error("Тест 'validateCount' 2 не пройден: ожидалась ошибка");
    } catch (error) {
      if (error.message === "Невалидное значение") {
        console.log("Тест 'validateCount' 2 пройден");
      } else {
        console.error("Тест 'validateCount' 2 не пройден: неверное сообщение об ошибке");
      }
    }
  }
  
  // Запуск тестов
  testParseCount();
  testValidateCount();
  
  // Задача 2. Треугольник
  
  // Определяем класс Triangle
  class Triangle {
    constructor(side1, side2, side3) {
      this.side1 = side1; // Длина первой стороны треугольника
      this.side2 = side2; // Длина второй стороны треугольника
      this.side3 = side3; // Длина третьей стороны треугольника
  
      // Проверяем существование треугольника
      if (!this.isValidTriangle()) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
    }
  
    // Метод для проверки существования треугольника
    isValidTriangle() {
      const { side1, side2, side3 } = this;
      return side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2;
    }
  
    // Геттер для вычисления периметра треугольника
    get perimeter() {
      return this.side1 + this.side2 + this.side3;
    }
  
    // Геттер для вычисления площади треугольника
    get area() {
      const { side1, side2, side3 } = this;
      const semiPerimeter = this.perimeter / 2;
      const area = Math.sqrt(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3));
      return parseFloat(area.toFixed(3));
    }
  }
  
  // Функция для получения треугольника
  function getTriangle(side1, side2, side3) {
    try {
      return new Triangle(side1, side2, side3);
    } catch (error) {
      // Если исключение было перехвачено, возвращаем объект с сообщением об ошибке
      return {
        perimeter: "Ошибка! Треугольник не существует",
        area: "Ошибка! Треугольник не существует"
      };
    }
  }
  
  // Тесты
  function testTriangle() {
    try {
      const triangle1 = new Triangle(1, 3, 3);
      console.log(triangle1.perimeter); // 7
      console.log(triangle1.area); // 1.479
  
      const triangle2 = new Triangle(2, 5, 5);
      console.log(triangle2.perimeter); // 12
      console.log(triangle2.area); // 4.899
  
      const triangle3 = new Triangle(6, 10, 15);
      console.log(triangle3.perimeter); // 31
      console.log(triangle3.area); // 20.123
  
      const triangle4 = new Triangle(1, 3, 100); // Ошибка: Треугольник с такими сторонами не существует
    } catch (error) {
      console.error(error.message);
    }
  }
  
  function testGetTriangle() {
    const triangle1 = getTriangle(2, 5, 5);
    console.log(triangle1.perimeter); // 12
    console.log(triangle1.area); // 4.899
  
    const triangle2 = getTriangle(1, 3, 100);
    console.log(triangle2.perimeter); // Ошибка! Треугольник не существует
    console.log(triangle2.area); // Ошибка! Треугольник не существует
  }
  
  testTriangle();
  testGetTriangle();
  
  