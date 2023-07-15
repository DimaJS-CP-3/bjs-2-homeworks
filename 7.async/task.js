// Задача 1. Будильник-колыбельная

class AlarmClock {
  constructor() {
    this.alarmCollection = []; // Коллекция звонков
    this.intervalId = null; // Идентификатор интервала
  }

  // Добавление звонка в коллекцию
  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error("Отсутствуют обязательные аргументы");
    } else if (this.alarmCollection.find((setup) => setup.time === time)) {
      console.warn("Уже присутствует звонок на это же время");
    }
    this.alarmCollection.push({ time, callback, canCall: true });
  }

  // Удаление звонка из коллекции
  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(
      (setup) => setup.time !== time
    );
  }

  // Получение текущего форматированного времени в формате HH:MM
  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString().slice(0, -3);
  }

  // Запуск будильника
  start() {
    if (this.intervalId) {
      return;
    }
    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((setup) => {
        if (setup.time === this.getCurrentFormattedTime() && setup.canCall) {
          setup.canCall = false;
          setup.callback();
        }
      });
    }, 1000);
  }

  // Остановка будильника
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  // Сброс возможности запуска звонков
  resetAllCalls() {
    this.alarmCollection.forEach((setup) => (setup.canCall = true));
  }

  // Очистка всех звонков
  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

// Создание экземпляра AlarmClock
const clock = new AlarmClock();

// Добавление звонка для тестирования
clock.addClock("08:00", () => console.log("Пора вставать!"));

// Проверка добавления звонка
console.log(clock.alarmCollection.length); // Ожидаемый вывод: 1

// Удаление звонка
clock.removeClock("08:00");

// Проверка удаления звонка
console.log(clock.alarmCollection.length); // Ожидаемый вывод: 0

// Запуск будильника
clock.start();

// Ждем некоторое время

// Остановка будильника
clock.stop();

// Сброс возможности запуска звонков
clock.resetAllCalls();

// Очистка всех звонков
clock.clearAlarms();

// Проверка очистки всех звонков
console.log(clock.alarmCollection.length); // Ожидаемый вывод: 0
