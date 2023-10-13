import { FormControl, TextField } from "@mui/material"; // Import Material-UI components for form control and text field
import { Box } from "@mui/system"; // Import Box component from Material-UI
import React, {useEffect} from "react"; // Import React from React library
import { useDispatch } from "react-redux"; // Import useDispatch hook from react-redux
import { handleAmountChange } from "../redux/actions/quizActions"; // Import action creator for changing the amount of questions

const TextFieldComp = (props) => {
  const dispatch = useDispatch(); // Initialize the useDispatch hook to dispatch actions
  const { quizNoOfQuestionsValue } = props; 

  useEffect(() => {
  if (quizNoOfQuestionsValue !== undefined) {
    handleChange();
  }
}, []);

  // Define a handleChange function that triggers when the text field value changes
  const handleChange = (e) => {
    if (quizNoOfQuestionsValue !== undefined) {
      dispatch(handleAmountChange(quizNoOfQuestionsValue));
      console.log("quizNoOfQuestionsValue: ", quizNoOfQuestionsValue);
    } else {
    dispatch(handleAmountChange(e.target.value));
    }; // Dispatch an action to change the amount of questions based on the entered value
  };

  return (
    <Box mt={3} width="100%">
      <FormControl fullWidth size="small">
        {/* Create a text field with an outlined style, label, type, and size */}
        <TextField
          onChange={handleChange} // Call the handleChange function when the text field value changes
          variant="outlined"
          label="Amount of Questions"
          type="number"
          size="small"
          InputProps={{ inputProps: { min: 1 , max: 50}  }} // Set min value to 1  max value to 50
        />
      </FormControl>
    </Box>
  );
};

export default TextFieldComp; // Export the TextFieldComp component
