import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  handleAmountChange,
  handleScoreChange,
  handleTotalTimeChange,
} from "../redux/actions/quizActions";
import styles from "./FinalScreen.module.css"; // Import the CSS module
import { UpdatedLeaderBoard } from '../components/database';
import congrats from '../assets/congrats.gif'

import Card from '../components/structure/Card';


const FinalScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { score, amount_of_question, timeUsed } = useSelector((state) => state);

  //Get player data
  UpdatedLeaderBoard(score);
  
  // Calculate the score percentage
  const scorePercentage = (score / amount_of_question) * 100;

  // Convert timeUsed from seconds to minutes and seconds
  const minutes = Math.floor(timeUsed / 60);
  const seconds = timeUsed % 60;

  const handleBackToSettings = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(50));
    dispatch(handleTotalTimeChange(0));
    navigate('/settings');
  };

  // Conditionally set the color based on the score percentage
  const scoreColor = scorePercentage >= 75 ? '#31cd63' : '#F24E1E';

  return (
    <Card> 

      {/* Header */}
      <div className={styles.header}>
        <h3>
          {scorePercentage >= 75 ? "Way to go!" : "Better Luck Next Time!"}
          </h3>
      </div>

      

        {/* Gif */}
      <div className={styles.gifContainer}>
      {scorePercentage >= 75 && <img src={congrats} alt="Wishes"  className={styles.gifimage}/>}
      {scorePercentage < 75 && <img src="https://media4.giphy.com/media/MNKo1E8MO85bfx6U2n/giphy.gif" alt="Wishes"  className={styles.gifimage}/>}
      </div>



      

      {/* Score & Timing */}

      <div className={styles.cardHeader}>Your Score</div>
        <div className={styles.score} style={{ color: scoreColor }}>
          {score} / {amount_of_question}
        </div>
        <div className={styles.totalTime}>
          Total Time: {minutes.toString().padStart(2, '0')}:
          {seconds.toString().padStart(2, '0')} min
        </div>

      <button
        className="buttonLight"
        type="button"
        onClick={handleBackToSettings}
      >
        New Quiz
        </button>


    </Card>
    

  );
};

export default FinalScreen;
