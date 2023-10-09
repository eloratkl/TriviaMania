import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  handleAmountChange,
  handleScoreChange,
  handleTotalTimeChange,
} from '../redux/actions/quizActions';
import styles from './FinalScreen.module.css'; // Import the CSS module

//import player date
import { UpdatedLeaderBoard } from '../components/database';

const FinalScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { score, amount_of_question, timeUsed } = useSelector((state) => state);

  //Get player data
  // UpdatedLeaderBoard(score);

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
    <div className={styles.finalScreenContainer}>
      <div className={styles.header}>
        {scorePercentage >= 75 ? 'Way to go!' : 'Better Luck Next Time'}
      </div>
      <div className={styles.card}>
        <div className={styles.cardHeader}>Your Score</div>
        <div className={styles.score} style={{ color: scoreColor }}>
          {score} / {amount_of_question}
        </div>
        <div className={styles.totalTime}>
          Total Time: {minutes.toString().padStart(2, '0')}:
          {seconds.toString().padStart(2, '0')} min
        </div>
      </div>
      <button
        type="button"
        onClick={handleBackToSettings}
        className={styles.settingsButton}
      >
        Back to Settings
      </button>
    </div>
  );
};

export default FinalScreen;
