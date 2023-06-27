// импортируем нужные нам зависимости
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/App";

//  создаем корневой элемент куда мы будет отрисовывать наши компоненты
const root = ReactDOM.createRoot(document.getElementById("root"));
// Метод для отрисовки наших элементов в наш созданный корневой элемент
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
