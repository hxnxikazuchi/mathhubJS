import { useEffect, useState } from "react";
import Intro from "../intro/Intro";
import Game from "../game/Game";
// Создаем главный компонент App, который будет вклчать в себя все другие компоненты
export default function App() {
  // создаем нужные нам состояния
  const [randomNumber, setRandomNumber] = useState(0);
  const [gameSettings, setGameSettings] = useState({
    minNumber: 1,
    maxNumber: 100,
    attempts: 10,
  });
  const [isPlaying, setIsPlaying] = useState(true);
  const [guesses, setGuesses] = useState([]);
  const [message, setMessage] = useState("");
  // мы используем хук useEffect для того чтобы при полной отрисовке нашего App мы получали случайное число
  useEffect(
    function () {
      setRandomNumber(
        getRandomNumber(gameSettings.minNumber, gameSettings.maxNumber)
      );
    },
    [gameSettings.minNumber, gameSettings.maxNumber]
  );
  // функция получения случайного числа
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log(randomNumber);
  // функция проверки валидности нашего ввода
  function validateGuess(guess) {
    if (isNaN(guess)) {
      alert("Пожалуйста, введите корректное число");
    } else if (guess < gameSettings.minNumber) {
      alert(
        `Пожалуйста, введите число не менее чем ${gameSettings.minNumber}!`
      );
    } else if (guess > gameSettings.maxNumber) {
      alert(
        `Пожалуйста, введите число не больше чем ${gameSettings.maxNumber}!`
      );
    } else {
      checkGuess(guess);
    }
  }
  // обрабатываем наш ввод
  function checkGuess(guess) {
    addGuess(guess);
    if (guess === randomNumber) {
      setMessage("Ты угадал! Молодец!");
      setIsPlaying(false);
    } else if (
      guess !== randomNumber &&
      guesses.length === gameSettings.attempts - 1
    ) {
      setMessage(`Вы проиграли! Загаданное число было ${randomNumber}`);
      setIsPlaying(false);
    } else if (guess < randomNumber) {
      setMessage(`Загаданное число больше текущего! Попробуйте снова!`);
    } else if (guess > randomNumber) {
      setMessage(`Загаданное число меньше текущего! Попробуйте снова!`);
    }
  }
  // добавляем в наш массив вариантов новый ввод
  function addGuess(guess) {
    const newArray = [...guesses, guess];
    setGuesses(newArray);
  }
  // функция для начала новой игры, обнуляем все данные
  function startNewGame() {
    setRandomNumber(
      getRandomNumber(gameSettings.minNumber, gameSettings.maxNumber)
    );
    setGuesses([]);
    setMessage("");
    setIsPlaying(true);
  }
  // переменная хранящая в себе остаток попыток
  const remainingAttempts = gameSettings.attempts - guesses.length;

  return (
    <div className="app">
      <Intro gameSettings={gameSettings} />
      <Game
        attempts={remainingAttempts}
        gameSettings={gameSettings}
        onSettingsChange={setGameSettings}
        onValidate={validateGuess}
        isPlaying={isPlaying}
        guesses={guesses}
        message={message}
        startNewGame={startNewGame}
      />
    </div>
  );
}
