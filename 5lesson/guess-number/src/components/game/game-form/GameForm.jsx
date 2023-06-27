import { useState } from "react";
// Создаем компонент GameForm
export default function GameForm({ onValidate, isPlaying }) {
  const [guess, setGuess] = useState("");
  function formValidate(e) {
    e.preventDefault();
    onValidate(+guess);
    setGuess("");
  }

  return (
    <form className="game__form" onSubmit={formValidate}>
      <label htmlFor="guessField" id="guess" className="guess">
        Угадай число
      </label>
      <input
        type="text"
        id="guessField"
        className="guess-field"
        value={guess}
        onChange={function (e) {
          setGuess(e.target.value);
        }}
        disabled={!isPlaying}
      />
      <button type="submit" className="guess-btn" disabled={!isPlaying}>
        Угадать
      </button>
    </form>
  );
}
