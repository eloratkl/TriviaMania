import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import quizReducer from "./redux/reducers/quizReducer";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";

const quizStore = createStore(quizReducer);
const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={quizStore}>
      <App tab="home" />
    </Provider>
  </React.StrictMode>
);
