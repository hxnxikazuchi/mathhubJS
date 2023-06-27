// импортируем нужные нам компоненты
import GameForm from "./game-form/GameForm";
import GameResult from "./game-result/GameResult";
import GameSettings from "./game-settings/GameSettings";
// создаем компонент Game, который принимает в себя пропсы
export default function Game({
  attempts,
  onValidate,
  isPlaying,
  guesses,
  message,
  startNewGame,
  gameSettings,
  onSettingsChange,
}) {
  // отрисовываем компоненты и передаем пропсы
  return (
    <div className="game">
      <GameSettings
        gameSettings={gameSettings}
        onSettingsChange={onSettingsChange}
      />
      <GameForm onValidate={onValidate} isPlaying={isPlaying} />
      <GameResult
        attempts={attempts}
        guesses={guesses}
        message={message}
        isPlaying={isPlaying}
        startNewGame={startNewGame}
      />
    </div>
  );
}
