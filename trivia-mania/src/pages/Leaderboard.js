import React, { useState } from "react";
import {
  Container,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { Box } from "@mui/system";
import Board from "../components/Board";
import "../components/style.css";

const LeaderboardPage = () => {
  const [period, setPeriod] = useState("all");

  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
  };

  return (
    <Container maxWidth="md"> {/* Use Container for styling */}
      <Box>
        <Typography variant="h2" fontWeight="bold">
          Trivia Mania
        </Typography>
        <RadioGroup
          name="period"
          value={period}
          onChange={handlePeriodChange}
          row
          className="radio-group-center"
        >
          <FormControlLabel value="7" control={<Radio />} label="7 Days" />
          <FormControlLabel value="30" control={<Radio />} label="30 Days" />
          <FormControlLabel value="all" control={<Radio />} label="All-Time" />
        </RadioGroup>
        <Board period={period} /> {/* Pass the selected period as a prop */}
      </Box>
    </Container>
  );
};

export default LeaderboardPage;
