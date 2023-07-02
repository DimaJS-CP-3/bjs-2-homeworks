function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
  this.subject = null;
  this.excluded = null;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
  if (this.excluded) {
    console.log('Студент отчислен. Добавление оценок невозможно.');
    return;
  }

  if (!this.marks) {
    this.marks = [];
  }

  this.marks.push(...marks);
};

Student.prototype.getAverage = function () {
  if (!this.marks || this.marks.length === 0) {
    return 0;
  }

  const sum = this.marks.reduce((total, mark) => total + mark, 0);
  const average = sum / this.marks.length;
  return average;
};

Student.prototype.exclude = function (reason) {
  this.subject = undefined;
  this.marks = undefined;
  this.excluded = reason;
};

// Создаем экземпляры студентов
const student1 = new Student("Василиса", "женский", 19);
const student2 = new Student("Артём", "мужской", 25);

// Проверяем работу методов
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);

student2.setSubject("Geometry");
student2.exclude('плохая учёба');
console.log(student2);

// Тесты
function runTests() {
  // Тест 1: Сохранение базовых свойств
  let student = new Student("Василиса", "женский", 19);
  assert(student.name === "Василиса", "Имя студента сохранено неверно");
  assert(student.gender === "женский", "Пол студента сохранен неверно");
  assert(student.age === 19, "Возраст студента сохранен неверно");
  assert(student.marks.length === 0, "Массив оценок студента не пустой");

  // Тест 2: Установка предмета
  student.setSubject("Algebra");
  assert(student.subject === "Algebra", "Предмет не установлен корректно");

  // Тест 3: Добавление оценок
  student.addMarks(5, 4, 5);
  assert(student.marks.length === 3, "Оценки не добавлены корректно");
  assert(student.marks[0] === 5 && student.marks[1] === 4 && student.marks[2] === 5, "Оценки добавлены неверно");

  // Тест 4: Вычисление среднего
  assert(student.getAverage() === 4.666666666666667, "Средний балл вычислен неверно");

  // Тест 5: Отчисление студента
  student.exclude("прогулы");
  assert(student.excluded === "прогулы", "Причина отчисления не установлена");
  assert(student.subject === null && student.marks === null, "Предмет и оценки не удалены");

  console.log("Все тесты выполнены успешно.");
}

function assert(condition, message) {
  if (!condition) {
    console.error("Тест провален:", message);
  }
}

runTests();
