import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "../reducers/quizReducer";

const quizStore = configureStore({
  reducer: {
    // Define your reducer here, using a key-value pair
    // The key will be used as the property name in the Redux store
    // The value should be the reducer function
    quiz: quizReducer,
  },
  // Additional store configuration options can go here if needed
});

export default quizStore;
