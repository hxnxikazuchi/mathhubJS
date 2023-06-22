import MyButton from "./mybutton";

import "./app.css";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //   console.log(useState("Какой прекрасный день!"));
  //   console.log(isLoggedIn, setIsLoggedIn);
  //   const myStyle = "my-color";
  //   const isLoggenIn = false;
  //   if (isLoggenIn) {
  //     return <h1 className={myStyle}>Hello Admin!!!</h1>;
  //   } else {
  //     return <h1 className={myStyle}>Hello Guest!!!</h1>;
  //   }
  //   function handleClick() {
  //     console.log("На меня нажали!");
  //   }

  function login() {
    setIsLoggedIn(true);
  }

  function logout() {
    setIsLoggedIn(false);
  }
  return (
    <>
      <MyButton title="Зайти" onCall={login} />
      <br />
      <br />
      <MyButton title="Выйти" onCall={logout} />
      <h1>Добрый день, {isLoggedIn ? "Руслан" : "Гость"}</h1>
    </>
  );
}

export default App;
