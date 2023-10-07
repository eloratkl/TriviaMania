import React from "react";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  handleAmountChange,
  handleScoreChange,
  handleTotalTimeChange,
} from "../redux/actions/quizActions";
import styles from "./FinalScreen.module.css"; // Import the CSS module

const FinalScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { score, amount_of_question, timeUsed } = useSelector((state) => state);

  // Convert timeUsed from seconds to minutes and seconds
  const minutes = Math.floor(timeUsed / 60);
  const seconds = timeUsed % 60;

  const handleBackToSettings = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(50));
    dispatch(handleTotalTimeChange(0));
    navigate("/settings");
  };

  return (
    <Box className={styles.finalScreenContainer}>
      <div className={styles.header}>Way to go!</div>
      <div className={styles.card}>
        <div className={styles.cardHeader}>Your Score</div>
        <div className={styles.score}>
          {score} / {amount_of_question}
        </div>
        <div className={styles.totalTime}>
          Total Time: {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")} min
        </div>
      </div>
      <button
        type="button"
        onClick={handleBackToSettings}
        className={styles.settingsButton}
      >
        Back to Settings
      </button>
    </Box>
  );
};

export default FinalScreen;
