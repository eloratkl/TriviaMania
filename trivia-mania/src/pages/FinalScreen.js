import React from "react";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  handleAmountChange,
  handleScoreChange,
} from "../redux/actions/quizActions";
import styles from "./FinalScreen.module.css"; // Import the CSS module

const FinalScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { score } = useSelector((state) => state);

  const handleBackToSettings = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(50));
    navigate("/");
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
          {score}
        </div>
        <div className={styles.totalTime}>
          Total Time: --:--
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
