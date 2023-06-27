// Компонент Intro, принимающий в себя пропс gameSettings
export default function Intro({ gameSettings }) {
  return (
    <>
      <h1>Игра в угадывание чисел</h1>
      <p>
        Попробуйте угадать случайное число от &#123;
        <span className="min-number">{gameSettings.minNumber}</span>
        &#125; до &#123;
        <span className="max-number">{gameSettings.maxNumber}</span>
        &#125;.
      </p>
      <p>
        У вас есть <span className="total-lives">{gameSettings.attempts}</span>{" "}
        попыток угадать правильное число.
      </p>
    </>
  );
}
