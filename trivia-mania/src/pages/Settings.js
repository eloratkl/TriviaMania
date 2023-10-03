import { Button, CircularProgress, Typography } from "@mui/material"; // Import Button, CircularProgress, and Typography components from Material-UI
import { Box } from "@mui/system"; // Import Box component from Material-UI
import { useNavigate } from "react-router-dom"; // Import useNavigate hook from react-router-dom
import SelectField from "../components/SelectField"; // Import custom SelectField component
import TextFieldComp from "../components/TextFieldComp"; // Import custom TextFieldComp component
import useAxios from "../hooks/useAxios"; // Import custom useAxios hook

const Settings = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" }); // Use custom useAxios hook to fetch data
  const navigate = useNavigate(); // Initialize useNavigate hook to handle navigation

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress /> {/* Show loading spinner while data is loading */}
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Something Went Wrong! {/* Display an error message if an error occurs */}
      </Typography>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ]; // Define options for difficulty selection

  const typeOptions = [
    { id: "multiple", name: "Multiple Choice" },
    { id: "boolean", name: "True/False" },
  ]; // Define options for question type selection

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    navigate("/questions"); // Use navigate to go to the questions route when the form is submitted
  };

  return (
    <form onSubmit={handleSubmit}>
      <SelectField options={response.trivia_categories} label="Category" /> {/* Render a SelectField for category selection */}
      <SelectField options={difficultyOptions} label="Difficulty" /> {/* Render a SelectField for difficulty selection */}
      <SelectField options={typeOptions} label="Type" /> {/* Render a SelectField for question type selection */}
      <TextFieldComp /> {/* Render a custom TextField component */}
      <Box mt={3} width="100%">
        <Button fullWidth variant="contained" type="submit">
          Get Started {/* Render a button to start the quiz */}
        </Button>
      </Box>
    </form>
  );
};

export default Settings; // Export the Settings component

