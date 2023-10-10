import React, { useEffect, useState } from "react";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogTitle,
  Typography,
} from "@mui/material";
import { decode } from "html-entities";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import {
  handleScoreChange,
  handleTotalTimeChange,
  setGamePaused,
  handleResumeGameAction,
  handleQuitGameAction,
  handleAmountChange,
} from "../redux/actions/quizActions";
import styles from "./Questions.module.css";
import CountdownTimer from "../components/Timer";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline"; // Import the PauseCircleOutline icon
import Confetti from 'react-confetti';

const Questions = () => {
  const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_question,
    score = 0,
    isPaused,
  } = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showNextQuestion, setShowNextQuestion] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const [totalTimeUsed, setTotalTimeUsed] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  let seconds = 10;

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

  const { response, loading } = useAxios({ url: apiUrl });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (showConfetti) {
      const timeout = setTimeout(() => {
        setShowNextQuestion(true);
        handleResume();
        setShowConfetti(false);
      }, 2500); // Adjust the duration as needed (2500ms = 2.5 seconds)
      
      return () => clearTimeout(timeout);
    }
    if (response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [question.correct_answer, ...question.incorrect_answers];
      answers = shuffleArray(answers); // Shuffle the answers randomly
      setOptions(answers);
    }
  }, [showConfetti, response, questionIndex]);

  if (loading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }

  const handleTimerEnd = () => {
    setTimerExpired(true);
  };

  const handlePause = () => {
    setIsTimerRunning(false);
  };

  const handleResume = () => {
    setIsTimerRunning(true);
  };

  const updateTotalTimeUsed = (time) => {
    if(isTimerRunning){
    setTotalTimeUsed((prevTime) => prevTime + time);
    dispatch(handleTotalTimeChange(totalTimeUsed));
    }
  };

  const handleClickAnswer = (e) => {
    const question = response.results[questionIndex];
    const selectedAnswer = e.target.textContent;

    if (selectedAnswer === question.correct_answer) {
      // Check if the selected answer is correct
      dispatch(handleScoreChange(score + 1));
      handlePause();
      setShowConfetti(true);
      setShowNextQuestion(false);
    }
    if(showNextQuestion){
    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate("/score");
    }
  }
  };

  // Shuffle array function
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const handlePauseGame = () => {
    if (!isPaused) {
      handlePause();
      dispatch(setGamePaused(true));
      setShowPopup(true);
      console.log("Dialog should be displayed now.");
    }
  };

  const handleResumeGame = () => {
    if (showPopup) {
      handleResume();
      dispatch(handleResumeGameAction());
      setShowPopup(false);
    }
  };

  const handleQuitGame = () => {
    dispatch(handleQuitGameAction());
    setShowPopup(false);
    navigate("/score");
  };

  const handleBackToSettings = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(50));
    dispatch(handleTotalTimeChange(0));
    navigate("/settings"); // Use navigate to go back to the home route ("/")
  };

  const renderNoQuestions = () => {
    return (
      <div className={styles.questionCard}>
        <Typography variant="h5" fontWeight="bold" mb={3}>
          Limited Questions only! {/* Display the final score */}
        </Typography>
        <Button onClick={handleBackToSettings} variant="contained" color="info">
            Back to settings!
        </Button>
      </div>
    );
  };

  if (response?.results.length === 0) {
    return renderNoQuestions();
  } else {
    if(!timerExpired)
    {
    return (
      <div className={styles.questionCard}>      
        {showConfetti && <Confetti />}
        <div className={styles.timerContainer}>
          {/* Pass initial time in seconds */}
          <CountdownTimer
            initialTime={amount_of_question * seconds}
            onTimerEnd={handleTimerEnd}
            updateTimeUsed={updateTotalTimeUsed}
            isRunning={isTimerRunning}
          />
        </div>
        {showNextQuestion &&
        <div className={styles.questionCard}>
        <Button
          onClick={handlePauseGame} 
          variant="contained"
          color="primary"
          className={styles.pauseButton}
          startIcon={<PauseCircleOutlineIcon />}
        >
        </Button>
        
        <div className={styles.questionIndex}>
          Question: {questionIndex + 1}
        </div>
        <div className={styles.questionText}>
          {decode(response.results[questionIndex].question)}
        </div>

        <div className={styles.answerOptions}>
          {options.map((data, id) => (
            <Button
              key={id}
              onClick={handleClickAnswer}
              variant="contained"
              className={styles.answerButton}
            >
              {decode(data)}
            </Button>
          ))}
        </div>
        <div className={styles.scoreText}>
          Score: {score} / {amount_of_question}
        </div>
        {!timerExpired && (
          <Button onClick={handleBackToSettings} variant="contained" color="info">
            Back to settings!
          </Button>
        )}
        </div>}       
        <Dialog open={showPopup}>
          <DialogTitle>
            <Typography variant="h6" align="center">Game Paused</Typography>
          </DialogTitle>
          <DialogActions>
            <Button
              onClick={handleResumeGame}
              variant="contained"
              color="success"
            >
              Resume Game
            </Button>
            <Button onClick={handleQuitGame} variant="contained" color="error">
              Quit Game
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }else{
    navigate("/score");
  }
  }
};
export default Questions;
