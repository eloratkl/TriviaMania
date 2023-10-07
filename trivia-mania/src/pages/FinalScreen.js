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
  const { score, amount_of_question, timeUsed} = useSelector((state) => state);

  const handleBackToSettings = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(50));
    dispatch(handleTotalTimeChange(0));
    navigate("/settings");
  };

  return (
    <Box className={styles.finalScreenContainer}>
      <div className={styles.header}>
        Way to go!
      </div>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          Your Score
        </div>
        <div className={styles.score}>
        {score} / {amount_of_question}
        </div>
        <div className={styles.totalTime}>
       
          {/* Total Time: --:-- */}
          Total Time Used: {timeUsed + 1} seconds
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
