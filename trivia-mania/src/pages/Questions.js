import { Button, CircularProgress, Typography } from "@mui/material"; // Import Button, CircularProgress, and Typography components from Material-UI
import { Box } from "@mui/system"; // Import Box component from Material-UI
import { decode } from "html-entities"; // Import decode function to decode HTML entities
import { useEffect, useState } from "react"; // Import useEffect and useState from React
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch and useSelector from react-redux
import { useNavigate } from "react-router-dom"; // Import useNavigate hook from react-router-dom
import useAxios from "../hooks/useAxios"; // Import custom useAxios hook
import { handleScoreChange } from "../redux/actions/quizActions"; // Import action creator
import styles from "./Questions.module.css"; // Import CSS modules stylesheet as styles

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max)); // Function to get a random integer
};

const Questions = () => {
  const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_question,
    score,
  } = useSelector((state) => state); // Select relevant state values from Redux store
  const navigate = useNavigate(); // Initialize useNavigate hook to handle navigation
  const dispatch = useDispatch(); // Initialize useDispatch hook to dispatch actions

  let apiUrl = `/api.php?amount=${amount_of_question}`;
  if (question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`);
  }
  if (question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
  }
  if (question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`);
  }

  const { response, loading } = useAxios({ url: apiUrl }); // Use custom useAxios hook to fetch data
  const [questionIndex, setQuestionIndex] = useState(0); // Initialize state for the current question index
  const [options, setOptions] = useState([]); // Initialize state for answer options

  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex]; // Get the current question
      let answers = [...question.incorrect_answers]; // Create a copy of incorrect answers
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer // Insert the correct answer at a random position
      );
      setOptions(answers); // Set the answer options state
    }
  }, [response, questionIndex]); // Update answer options when response or question index changes

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress /> {/* Show loading spinner while data is loading */}
      </Box>
    );
  }
  const handleClickAnswer = (e) => {
    const question = response.results[questionIndex]; // Get the current question
    if (e.target.textContent === question.correct_answer) {
      dispatch(handleScoreChange(score + 1)); // Increment the score if the answer is correct
    }

    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1); // Move to the next question if available
    } else {
      navigate("/score"); // Use navigate to go to the score route when all questions are answered
    }
  };

  return (
    <Box className={styles.questionContainer}>
      <Typography variant="h4" className={styles.questionHeader}>
        Questions {questionIndex + 1} {/* Display the question number */}
      </Typography>
      <Typography className={styles.questionText}>
        {decode(response.results[questionIndex].question)}{" "}
        {/* Display the decoded question */}
      </Typography>
      <div className={styles.answerOptions}>
        {options.map((data, id) => (
          <Button
            key={id}
            onClick={handleClickAnswer}
            variant="contained"
            className={styles.answerButton}
          >
            {decode(data)} {/* Display the decoded answer options */}
          </Button>
        ))}
      </div>
      <Typography mt={5}>
        Score: {score} / {response.results.length}{" "}
        {/* Display the current score */}
      </Typography>
    </Box>
  );
};

export default Questions; // Export the Questions component
