// Создаем компонент GameResult
export default function GameResult({
  attempts,
  guesses,
  message,
  isPlaying,
  startNewGame,
}) {
  return (
    <div className="result">
      <p>
        Предыдущие варианты:{" "}
        <span className="guesses">{guesses.join(", ")}</span>
      </p>
      <p>
        Оставшиеся кол-во попыток:{" "}
        <span className="last-result">{attempts}</span>
      </p>
      <h1 className="hint">{message}</h1>
      {!isPlaying && (
        <button className="new-game-btn" onClick={startNewGame}>
          Начать снова
        </button>
      )}
    </div>
  );
}
