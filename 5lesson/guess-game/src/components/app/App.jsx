import { useState, useEffect } from "react";
import Intro from "../intro/Intro";
import Game from "../game/Game";

function App() {
  const [randomNumber, setRandomNumber] = useState(0);
  const [gameSettings, setGameSetting] = useState({
    minNumber: 1,
    maxNumber: 100,
    attempts: 10,
  });
  const [isPlaying, setIsPlaying] = useState(true);
  const [guesses, setGuesses] = useState([1, 2, 3]);
  useEffect(
    function () {
      setRandomNumber(
        getRandomNumber(gameSettings.minNumber, gameSettings.maxNumber)
      );
    },
    [gameSettings.minNumber, gameSettings.maxNumber]
  );

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  console.log(randomNumber);
  function validateGuess(guess) {
    if (isNaN(guess)) {
      alert("Пожалуйста, введите корректное число");
    } else if (guess < gameSettings.minNumber) {
      alert(`Пожалуйста, введите число не менее чем ${gameSettings.minNumber}`);
    } else if (guess > gameSettings.maxNumber) {
      alert(`Пожалуйста, введите число не более чем ${gameSettings.maxNumber}`);
    } else {
      checkGuess(guess);
    }
  }

  function checkGuess(guess) {}

  const remainingGuesses = gameSettings.attempts - guesses.length;

  return (
    <div className="app">
      <Intro gameSettings={gameSettings} />
      <Game
        isPlaying={isPlaying}
        onValidate={validateGuess}
        guesses={guesses}
        attempts={remainingGuesses}
      />
    </div>
  );
}

export default App;
