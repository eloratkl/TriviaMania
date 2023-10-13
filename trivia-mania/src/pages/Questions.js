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
import Confetti from 'react-confetti';
import Card from "../components/structure/Card";


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
        setShowConfetti(false);
        setShowNextQuestion(true);
        handleResume();
      }, 1500); // Adjust the duration as needed (2500ms = 2.5 seconds)
      
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
      <div style={{textAlign: "center", width:"100%"}}>
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
      <Card>
        <h2 className="limitedQuestions">
          Limited Questions only! 
        </h2>
        <button onClick={handleBackToSettings} className="buttonLight">
            Back to settings!
        </button>
      </Card>
    );
  };






  if (response?.results.length === 0) {
    return renderNoQuestions();
  } else {
    if(!timerExpired)
    {
    return (
      <div className={styles.questionContainer}>      


        {showConfetti && <Confetti />}
       



        {showNextQuestion &&
          <div className={styles.questionCard}>

            <div className="questionPauseRow">

              <div className={styles.questionIndex}>
                <h4>Question {questionIndex + 1}</h4>
               </div>
            
              <button className={ styles.pauseButton} onClick={handlePauseGame} >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1459B6" className="w-6 h-6">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM9 8.25a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75H9zm5.25 0a.75.75 0 00-.75.75v6c0 .414.336.75.75.75H15a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75h-.75z" clipRule="evenodd" />
                </svg>
              </button>
        

            </div>
            
            



        

        <div className={styles.questionText}>
          {decode(response.results[questionIndex].question)}
            </div>
            

            {/* Timer */}
            {/* Pass initial time in seconds */}
            <div className={styles.timerContainer}>
                  <CountdownTimer
                    initialTime={amount_of_question * seconds}
                    onTimerEnd={handleTimerEnd}
                    updateTimeUsed={updateTotalTimeUsed}
                    isRunning={isTimerRunning}
                        />
        </div>

        <div className={styles.answerOptions}>
              {options.map((data, id) => (
            
                <button key={id}
                  onClick={handleClickAnswer}
                  className={styles.answerButton}>
                   
                  {decode(data)}

                </button>
            // <Button
            //   key={id}
            //   onClick={handleClickAnswer}
            //   variant="contained"
            //   className={styles.answerButton}
            // >
            //   {decode(data)}
            // </Button>
          ))}
            </div>
            


        {/* <div className={styles.scoreText}>
          Score: {score} / {amount_of_question}
        </div> */}
            


        {/* {!timerExpired && (
          <Button onClick={handleBackToSettings} variant="contained" color="info">
            Pick a New Quiz!
          </Button>
        )} */}
          </div>}   
        
        {/*  Popup */}
        <Dialog open={showPopup}>
          <div className={styles.popupWrapper}>
            
            <button onClick={handleResumeGame} className={styles.popupClose}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#adadad"
  className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
            </button>
            

          <DialogTitle>
            <h3>Game Paused</h3>
          </DialogTitle>
          <DialogActions>
            <div className={ styles.popupButtons}>
              <button className={ styles.buttonResume} onClick={handleResumeGame}>
                Resume
              </button>
              <button className={ styles.buttonQuit} onClick={handleQuitGame}>
                Quit Game
              </button>
              {/* <Button
                onClick={handleResumeGame}
                variant="contained"
                color="success"
              >
                Resume Game
              </Button> */}
              {/* <Button onClick={handleQuitGame} variant="contained" color="error">
                Quit Game
              </Button> */}
              </div>
            </DialogActions>
            </div>
        </Dialog>
      </div>
    );
  }else{
    navigate("/score");
  }
  }
};
export default Questions;
