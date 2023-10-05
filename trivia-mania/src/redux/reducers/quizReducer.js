import {
  CHANGE_AMOUNT,
  CHANGE_CATEGORY,
  CHANGE_DIFFICULTY,
  CHANGE_SCORE,
  CHANGE_TYPE,
} from "../actions/quizActionTypes";

// Define initial state for both leaderboard and quiz settings
const initialState = {
  question_category: "",  // Initialize the category with an empty string
  question_difficulty: "",// Initialize the difficulty with an empty string
  question_type: "",      // Initialize the question type with an empty string
  amount_of_question: 50, // Initialize the number of questions with 50
  score: 0,               // Initialize the user's score with 0
};

// Reducer function that handles quiz settings
const quizReducer = (state = initialState, action) => {
  // Use a switch statement to handle different action types
  switch (action.type) {
    // For quiz settings actions
    case CHANGE_CATEGORY:
      return {
        ...state,
        question_category: action.payload,
      };
    case CHANGE_DIFFICULTY:
      return {
        ...state,
        question_difficulty: action.payload,
      };
    case CHANGE_TYPE:
      return {
        ...state,
        question_type: action.payload,
      };
    case CHANGE_AMOUNT:
      return {
        ...state,
        amount_of_question: action.payload,
      };
    case CHANGE_SCORE:
      return {
        ...state,
        score: action.payload,
      };

    // If the action type is not recognized, return the current state unchanged
    default:
      return state;
  }
};

export default quizReducer; // Export the quizReducer function
