// Задача 1. Печатное издание

// Класс, представляющий печатное издание
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name; // Название печатного издания
    this.releaseDate = releaseDate; // Год издания
    this.pagesCount = pagesCount; // Количество страниц
    this.state = 100; // Состояние издания (по умолчанию 100)
    this.type = null; // Тип издания (по умолчанию null)
  }

  fix() {
    this.state *= 1.5; // Метод для улучшения состояния издания
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  get state() {
    return this._state; // Геттер для получения состояния издания
  }
}

// Класс, представляющий журнал
class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine"; // Тип издания - журнал
  }
}

// Класс, представляющий книгу
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author; // Имя автора книги
    this.type = "book"; // Тип издания - книга
  }
}

// Класс, представляющий роман
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel"; // Тип издания - роман
  }
}

// Класс, представляющий фантастическую книгу
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic"; // Тип издания - фантастика
  }
}

// Класс, представляющий детективную книгу
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective"; // Тип издания - детектив
  }
}

// Создание экземпляров классов PrintEditionItem, FantasticBook и NovelBook
const sherlock = new PrintEditionItem(
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1008
);

console.log(sherlock.releaseDate); // 2019
console.log(sherlock.state); // 100
sherlock.fix();
console.log(sherlock.state); // 100

const picknick = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);

console.log(picknick.author); // "Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); // 10
picknick.fix();
console.log(picknick.state); // 15

// Задача 2. Библиотека

// Класс, представляющий библиотеку
class Library {
  constructor(name) {
    this.name = name;
    this.books = []; // Массив книг в библиотеке
  }

  // Метод добавления книги в библиотеку
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  // Метод поиска книги по заданному ключу и значению
  findBookBy(type, value) {
    return this.books.find((book) => book[type] === value) || null;
  }

  // Метод выдачи книги по названию
  giveBookByName(bookName) {
    const index = this.books.findIndex((book) => book.name === bookName);
    if (index !== -1) {
      return this.books.splice(index, 1)[0];
    }
    return null;
  }
}

// Создание экземпляра класса Library
const library = new Library("Библиотека имени Ленина");

// Добавление книг в библиотеку
library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));

// Поиск книги по ключу "name" и значению "Властелин колец"
const book = library.findBookBy("name", "Властелин колец");

console.log(book); // null

// Выдача книги по названию
const sherlockBook = library.giveBookByName(
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе"
);

console.log(sherlockBook);
console.log(library.books);