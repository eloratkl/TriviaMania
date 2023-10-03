import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
// import userAuthStore from "./redux/stores/userAuthStore";
import quizStore from "./redux/stores/quizStore";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={quizStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
