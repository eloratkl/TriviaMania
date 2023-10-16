import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/structure/Card";
import "../components/style.css";

import useAxios from "../hooks/useAxios";

import { CircularProgress, Typography } from "@mui/material";
import TextFieldComp from "../components/TextFieldComp";
import SelectField from "../components/SelectField";

const QuizStart = () => {
  const location = useLocation();
  const title = location.state?.title || "Default Title";
  const startQuizParagraph =
    location.state?.startQuizParagraph || "Default Paragraph";
  const startQuizImage = location.state?.startQuizImage || "Default Image";
  const startQuizAlt = location.state?.startQuizAlt || "Default Image Alt";
  let startQuizIndex = parseInt(location.state?.startQuizIndex, 10);

  if (isNaN(startQuizIndex) || startQuizIndex < 0) {
    // Handle invalid or missing startQuizIndex here
    startQuizIndex = 0; // Set a default value or handle it as needed
  }

  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  const navigate = useNavigate(); // Use useNavigate for navigation

  const [loadingTimeout, setLoadingTimeout] = useState(true);

  useEffect(() => {
    // Simulate a delay in loading the response
    const delay = 1250; // 2 seconds (you can adjust this value)

    setTimeout(() => {
      setLoadingTimeout(false);
    }, delay);
  }, []);

  if (loadingTimeout || loading) {
    return (
      <Card>
        <CircularProgress />
      </Card>
    );
  }

  if (startQuizIndex === null || startQuizIndex === "x") {
    return (
      <Card>
        <Typography variant="h6" mt={20} color="red">
          Invalid or missing startQuizIndex!
        </Typography>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <Typography variant="h6" mt={20} color="red">
          Something Went Wrong!
        </Typography>
      </Card>
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

    const selectedCategoryId = response.trivia_categories[startQuizIndex].id;
    console.log("Response", response.trivia_categories[startQuizIndex]);

    navigate("/questions?categoryId=" + selectedCategoryId);
  };

  return (
    <div className="quiz-start-div">
      <Card>
        <h2 className="quiz-start-title">{title}</h2>
        <div className="quiz-tracker-container">
          <div className="quiz-tracker">
            <div className="quiz-bold">Time Limit:</div>
            <div>00:50 mins</div>
          </div>

          <div className="quiz-tracker">
            <div className="quiz-bold">Points:</div>
            <div>5 points</div>
          </div>
        </div>

        <img
          src={startQuizImage}
          alt={startQuizAlt}
          className="quiz-start-image"
        />

        <p className="quiz-start-p">{startQuizParagraph}</p>

        <form onSubmit={handleSubmit}>
          <div style={{ display: "none" }}>
            <SelectField
              options={response.trivia_categories}
              label="Category"
              quizStartValue={response.trivia_categories[startQuizIndex].id}
            />
            <SelectField
              options={difficultyOptions}
              label="Difficulty"
              quizDifficultyValue={
                difficultyOptions[Math.floor(Math.random() * 3)].id
              }
            />
            <SelectField
              options={typeOptions}
              label="Type"
              quizTypeValue={typeOptions[Math.floor(Math.random() * 2)].id}
            />
            <TextFieldComp
              quizNoOfQuestionsValue={Math.floor(Math.random() * 11) + 5}
            />
          </div>

          <button
            fullWidth
            variant="contained"
            type="submit"
            className="quiz-start-button"
            style={{ cursor: "pointer" }}
          >
            Start!
          </button>
        </form>
      </Card>
    </div>
  );
};

export default QuizStart;
