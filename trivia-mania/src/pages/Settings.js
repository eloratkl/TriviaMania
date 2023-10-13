import { CircularProgress, Typography } from "@mui/material";
// import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import SelectField from "../components/SelectField";
import TextFieldComp from "../components/TextFieldComp";
import useAxios from "../hooks/useAxios";
import styles from "./Settings.module.css";

import Card from "../components/structure/Card";

const Settings = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  const navigate = useNavigate(); // Use useNavigate for navigation

  if (loading) {
    return (
      
      <div style={{textAlign: "center", width:"100%"}}>
        <CircularProgress />
      </div>
    
    );
  }

  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Something Went Wrong!
      </Typography>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choice" },
    { id: "boolean", name: "True/False" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/questions"); // Use navigate for navigation
  };

  return (
    <Card>
      <h2>Quiz Settings ⚙️</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.settingsContainer}>
          <SelectField
            fullWidth
            variant="contained"
            options={response.trivia_categories}
            label="Category"
          />
          <SelectField
            fullWidth
            variant="contained"
            options={difficultyOptions}
            label="Difficulty"
          />
          <SelectField
            fullWidth
            variant="contained"
            options={typeOptions}
            label="Type"
          />
          <TextFieldComp />
        </div>
        <button
          fullWidth
          variant="contained"
          type="submit"
          className="buttonLight"
        >
          Start!
        </button>
      </form>
    </Card>
  );
};

export default Settings;
