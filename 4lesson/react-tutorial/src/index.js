import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
// function renderHello() {
//   return React.createElement("h1", null, "Hello World");
// }
// const myName = "Ruslan";
// const isLoggedIn = true;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <h1>Hello, {isLoggedIn ? myName : "Anonym"}</h1> */}
    {/* {renderHello()} */}
    <App />
  </React.StrictMode>
);
