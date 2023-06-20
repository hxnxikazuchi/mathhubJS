"use strict";
// наши селекторы
const submit = document.querySelector(".guess-btn");
const userInput = document.querySelector(".guess-field");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".last-result");
const totalLives = document.querySelector(".total-lives");
const startOver = document.querySelector(".result");
const hint = document.querySelector(".hint");
const minNumber = document.querySelector(".min-number");
const maxNumber = document.querySelector(".max-number");

// Создаем кнопку для повторной игры
const createNewGameBtn = document.createElement("button");
// console.dir(document)
// const obj = {
//   name: 'NAME'
// }
// console.dir(obj)
// console.dir(getRandomNumber)
// console.dir(1)
// submit.style.backgroundColor = "red";

//Устанавливаем минимальный, максимальный диапозон чисел и кол-во попыток
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
const MAX_ATTEMPTS = 10;

//инициализируем при запуске программы случайное число
let randomNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
console.log(randomNumber);

//создаем массив, где мы будем хранить наши варианты
let previousGuesses = [];

//переменная для хранения состояния, играем мы или нет
let playGame = true;

// const myObj = {
//   name: "ruslan",
//   sleep() {
//     return `${this.name} is sleeping`
//   },
// };

//при запуске программы задаем нашей размекте значения
remaining.textContent = MAX_ATTEMPTS;
totalLives.textContent = MAX_ATTEMPTS;
minNumber.textContent = MIN_NUMBER;
maxNumber.textContent = MAX_NUMBER;

//слушатель событий для нажатия кнопки "Угадать"
if (playGame) {
  submit.addEventListener("click", (e) => {
    // убираем встроенные события с кнопки
    e.preventDefault();
    // проверяем значение input
    const guess = +userInput.value;
    // вызываем функцию с нашим значением для провоерки числа
    validateGuess(guess);
  });
}

// функция для получения случайного числа в заданном диапазоне
// math.floor() - огругление до целого числа вниз
// math.random - случайное число от 0 до 1
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// функция валидации наших чисел
function validateGuess(guess) {
  // проверям наше значение чтобы оно не было NaN
  if (isNaN(guess)) {
    alert("Пожалуйста, введите корректное число");
  } else if (guess < MIN_NUMBER) {
    // если наше число меньше минимального
    alert(`Пожалуйста, введите число не менее ${MIN_NUMBER}!`);
  } else if (guess > MAX_NUMBER) {
    // если наше число больше максим ального
    alert(`Пожалуйста, введите число не больше чем ${MAX_NUMBER}!`);
  } else {
    checkGuess(guess); // проверяем наше значение
  }
}

// проверяем наши значения
function checkGuess(guess) {
  // добавляем в массив, очищаем input
  addGuess(guess);
  if (guess === randomNumber) {
    // если угадали число
    displayMessage(`Ты угадал! Молодец!`);
    endGame();
  } else if (
    // если не угадали число и попытки закончились
    guess !== randomNumber &&
    previousGuesses.length === MAX_ATTEMPTS
  ) {
    displayMessage(`Вы проиграли! Загаданное число было ${randomNumber}`);
    endGame();
  } else if (guess < randomNumber) {
    // подсказка для нас
    displayMessage(`Загаданное число больше текущего! Попробуйте снова!`);
  } else if (guess > randomNumber) {
    // подсказка для нас
    displayMessage(`Загаданное число меньше текущего! Попробуйте снова!`);
  }
}

// изменяем разметку
function addGuess(guess) {
  //очищаем input
  userInput.value = "";
  // добавляем в массив наше значение
  previousGuesses.push(guess);
  // изменяем разметку предыдущих вариантов
  guessSlot.textContent = JSON.stringify(previousGuesses, null, 2);
  // изменяем разметку попыток
  remaining.textContent = MAX_ATTEMPTS - previousGuesses.length;
}

// функция для вывода сообщений
function displayMessage(message) {
  hint.innerHTML = `<h1>${message}</h1>`;
}

// функция окончания игры
function endGame() {
  // очищаем input
  userInput.value = "";
  // блокируем input
  userInput.setAttribute("disabled", "");
  // блокируем кнопку "Угадать"
  submit.setAttribute("disabled", "");
  // добавляем кнопке "Играть снова" класс
  createNewGameBtn.classList.add("new-game-btn");
  // добавляем кнопке "Играть снова" текст
  createNewGameBtn.textContent = `Начать снова`;
  // добавляем кнопку "Играть снова" в разметку
  startOver.append(createNewGameBtn);
  // меняем режим игры
  playGame = false;
  newGame();
}

// функция для началa новой игры
function newGame() {
  const newGameButton = document.querySelector(".new-game-btn");
  newGameButton.addEventListener(
    "click",
    () => {
      // создаем новое случайное число
      randomNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
      console.log(randomNumber);
      // обнуляем массив с данными
      previousGuesses = [];
      // обнуляем предыдущие варианты
      guessSlot.textContent = "";
      // обнуляем подсказки
      hint.innerHTML = "";
      // возобновляем попытки
      remaining.textContent = MAX_ATTEMPTS;
      // восстанавливаем состояния кнопок
      userInput.removeAttribute("disabled");
      submit.removeAttribute("disabled");
      // удаляем кнопку "Играть снова"
      createNewGameBtn.remove();
      playGame = true;
    },
    { once: true } // делаем слушатель одноразовым
  );
}
