// Import action type constants for quiz settings
import {
  CHANGE_AMOUNT,
  CHANGE_CATEGORY,
  CHANGE_DIFFICULTY,
  CHANGE_SCORE,
  CHANGE_TYPE,
} from "./quizActionTypes";


// Define an action creator for changing the category
export const handleCategoryChange = (payload) => ({
  type: CHANGE_CATEGORY, // Assign the action type constant for category change
  payload, // Assign the new category value as the payload
});

// Define an action creator for changing the difficulty
export const handleDifficultyChange = (payload) => ({
  type: CHANGE_DIFFICULTY, // Assign the action type constant for difficulty change
  payload, // Assign the new difficulty value as the payload
});

// Define an action creator for changing the question type
export const handleTypeChange = (payload) => ({
  type: CHANGE_TYPE, // Assign the action type constant for question type change
  payload, // Assign the new question type value as the payload
});

// Define an action creator for changing the number of questions
export const handleAmountChange = (payload) => ({
  type: CHANGE_AMOUNT, // Assign the action type constant for amount change
  payload, // Assign the new number of questions as the payload
});

// Define an action creator for changing the user's score
export const handleScoreChange = (payload) => ({
  type: CHANGE_SCORE, // Assign the action type constant for score change
  payload, // Assign the new score value as the payload
});
