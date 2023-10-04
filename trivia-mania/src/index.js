import React from "react";
import { Provider } from "react-redux";
// import userAuthStore from "./redux/stores/userAuthStore";
import { createStore } from "redux";
import quizReducer from "./redux/reducers/quizReducer";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom";

const quizStore = createStore(quizReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={quizStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
