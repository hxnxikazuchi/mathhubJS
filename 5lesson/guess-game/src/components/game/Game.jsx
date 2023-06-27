import GameForm from "./game-form/GameForm";
import GameResult from "./game-result/GameResult";
function Game({ isPlaying, onValidate, attempts, guesses }) {
  return (
    <div className="game">
      <GameForm isPlaying={isPlaying} onValidate={onValidate} />
      <GameResult guesses={guesses} attempts={attempts} />
    </div>
  );
}

export default Game;
