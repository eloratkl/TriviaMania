import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"; // Import Material-UI components for form control
import { Box } from "@mui/system"; // Import Box component from Material-UI
import React, { useState } from "react"; // Import React and useState from React library
import { useDispatch } from "react-redux"; // Import useDispatch hook from react-redux
import {
  handleCategoryChange,
  handleDifficultyChange,
  handleTypeChange,
} from "../redux/actions/quizActions"; // Import action creators for changing category, difficulty, and type

const SelectField = (props) => {
  const { label, options } = props; // Destructure label and options from props
  const dispatch = useDispatch(); // Initialize the useDispatch hook to dispatch actions
  const [value, setValue] = useState(""); // Initialize a state variable to store the selected value

  const handleChange = (e) => {
    setValue(e.target.value); // Update the state with the selected value when the user makes a selection
    switch (label) {
      case "Category":
        dispatch(handleCategoryChange(e.target.value)); // Dispatch an action to change the selected category
        break;
      case "Difficulty":
        dispatch(handleDifficultyChange(e.target.value)); // Dispatch an action to change the selected difficulty
        break;
      case "Type":
        dispatch(handleTypeChange(e.target.value)); // Dispatch an action to change the selected question type
        break;
      default:
        return;
    }
  };

  return (
    <Box mt={3} width="100%">
      <FormControl size="small" fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={value} label={label} onChange={handleChange}>
          {/* Map through the options and create a MenuItem for each */}
          {options.map(({ id, name }) => (
            <MenuItem value={id} key={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectField; // Export the SelectField component
