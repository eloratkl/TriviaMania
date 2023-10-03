import React from "react";
import { Provider } from "react-redux";
// import userAuthStore from "./redux/stores/userAuthStore";
import quizStore from "./redux/stores/quizStore";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={quizStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
