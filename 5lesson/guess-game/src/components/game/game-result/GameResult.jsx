function GameResult({ attempts, guesses }) {
  return (
    <div className="result">
      <p>
        Предыдущие варианты:{" "}
        <span className="guesses">{guesses.join(", ")}</span>
      </p>
      <p>
        Оставшиеся количество попыток:{" "}
        <span className="last-resulst">{attempts}</span>
      </p>
    </div>
  );
}

export default GameResult;
