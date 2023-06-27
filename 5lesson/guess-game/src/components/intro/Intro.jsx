function Intro({ gameSettings }) {
  return (
    <>
      <h1>Игра в угадывание чисел</h1>
      <p>
        Попробуйте угадать случайное число от{" "}
        <span className="min-number">{gameSettings.minNumber}</span> до{" "}
        <span className="max-number">{gameSettings.maxNumber}</span>
      </p>
      <p>
        У вас есть <span className="total-lives">{gameSettings.attempts}</span>{" "}
        попыток угадать правильное число
      </p>
    </>
  );
}

export default Intro;
