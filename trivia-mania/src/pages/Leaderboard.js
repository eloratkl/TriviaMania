import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import Card from "../components/structure/Card";
import Board from "../components/Board";
import "../components/style.css";

const LeaderboardPage = () => {
  const [period, setPeriod] = useState("all");

  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
  };

 return (
    <Card>
      <Board period={period} /> {/* Pass the selected period as a prop */}
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
    </Card>
  );
};

export default LeaderboardPage;
