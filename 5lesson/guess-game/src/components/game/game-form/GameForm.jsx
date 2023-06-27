import { useState } from "react";

function GameForm({ isPlaying, onValidate }) {
  const [guess, setGuess] = useState("");
  function formValidate(event) {
    event.preventDefault();
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
        onChange={function (event) {
          setGuess(event.target.value);
        }}
        value={guess}
      />
      <button type="submit" className="guess-btn" disabled={!isPlaying}>
        Угадать
      </button>
    </form>
  );
}

export default GameForm;
