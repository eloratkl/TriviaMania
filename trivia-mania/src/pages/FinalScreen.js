import { Button, Typography } from "@mui/material"; // Import Button and Typography components from Material-UI
import { Box } from "@mui/system"; // Import Box component from Material-UI
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch hook from react-redux
import { useNavigate } from "react-router-dom"; // Import useNavigate hook from react-router-dom
import { handleAmountChange, handleScoreChange } from "../redux/actions/quizActions"; // Import action creators

const FinalScreen = () => {
  const dispatch = useDispatch(); // Initialize useDispatch hook to dispatch actions
  const navigate = useNavigate(); // Initialize useNavigate hook to handle navigation
  const { score } = useSelector((state) => state); // Select the 'score' state from Redux store

  const handleBackToSettings = () => {
    dispatch(handleScoreChange(0)); // Dispatch action to reset the score to 0
    dispatch(handleAmountChange(50)); // Dispatch action to reset the amount to 50
    navigate("/"); // Use navigate to go back to the home route ("/")
  };

  return (
    <Box mt={30}>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Final Score {score} {/* Display the final score */}
      </Typography>
      <Button onClick={handleBackToSettings} variant="outlined">
        Back to settings! {/* Display a button to navigate back to settings */}
      </Button>
    </Box>
  );
};

export default FinalScreen; // Export the FinalScreen component
