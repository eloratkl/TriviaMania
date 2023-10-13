// Import action type constants for quiz settings
import {
  CHANGE_AMOUNT,
  CHANGE_CATEGORY,
  CHANGE_DIFFICULTY,
  CHANGE_SCORE,
  CHANGE_TYPE,
  CHANGE_TOTALTIME,
  SET_GAME_PAUSED,
  RESUME_GAME,
  QUIT_GAME,
} from './quizActionTypes';

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
export const handleScoreChange = (newScore) => ({
  type: CHANGE_SCORE, // Assign the action type constant for score change
  payload: newScore, // Assign the new score value as the payload
});

// Define an action creator for changing the user's score
export const handleTotalTimeChange = (payload) => ({
  type: CHANGE_TOTALTIME, // Assign the action type constant for score change
  payload, // Assign the new score value as the payload
});

// Define an action creator for pausing the game
export const setGamePaused = (isPaused) => {
  return {
    type: SET_GAME_PAUSED,
    payload: isPaused,
  };
};

// Define an action creator for starting a new quiz
export const handleStartNewQuiz = () => {
  return (dispatch) => {
    dispatch(handleScoreChange(0)); // Reset the score to 0
    dispatch(handleAmountChange(5)); // Reset the number of questions (adjust as needed)
    // Reset other relevant state properties if needed
  };
};

// Define an action creator for resuming the game
export const handleResumeGameAction = () => ({
  type: RESUME_GAME,
});

// Define an action creator for quitting the game
export const handleQuitGameAction = () => ({
  type: QUIT_GAME,
});
