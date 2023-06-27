// Создаем компонент GameSettings, который принимает в себя пропсы
export default function GameSettings({ gameSettings, onSettingsChange }) {
  return (
    <form className="game__settings">
      <div className="game__settings-wrapper">
        <label htmlFor="select-min">Выберите минимальное число</label>
        <input
          type="number"
          id="select-min"
          min={1}
          max={10000}
          value={gameSettings.minNumber}
          onChange={function (e) {
            onSettingsChange({ ...gameSettings, minNumber: +e.target.value });
          }}
        />
      </div>
      <div className="game__settings-wrapper">
        <label htmlFor="select-max">Выберите максимальное число</label>
        <input
          type="number"
          id="select-max"
          min={1}
          max={10000}
          value={gameSettings.maxNumber}
          onChange={function (e) {
            onSettingsChange({ ...gameSettings, maxNumber: +e.target.value });
          }}
        />
      </div>
      <div className="game__settings-wrapper">
        <label htmlFor="select-attempts">Выберите количество попыток</label>
        <input
          type="number"
          id="select-attempts"
          min={1}
          max={10000}
          value={gameSettings.attempts}
          onChange={function (e) {
            onSettingsChange({ ...gameSettings, attempts: +e.target.value });
          }}
        />
      </div>
    </form>
  );
}
