import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import Card from "../components/structure/Card";
import Board from "../components/Board";
import "../components/style.css";
import styles from "./Leaderboard.module.css";


const LeaderboardPage = () => {
  const [period, setPeriod] = useState("all");

  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
  };

 return (
   <>
     
     <h1 className={styles.leaderboard}>Leaderboard</h1>


     <div className={styles.radioGroup} onChange={handlePeriodChange}>
       <div className={styles.radio}>
         <input type="radio" id="7" name="radioGroup" value="7" />
          <label for="7">7 Days</label>
       </div>


       <div className={styles.radio}>
         <input type="radio" id="30" name="radioGroup" value="30" />
          <label for="30">30 Days</label>
       </div>

       <div className={styles.radio}>
         <input type="radio" id="all" name="radioGroup" value="all" />
          <label for="all">All Time</label>
       </div>
       
     </div>

     {/* <RadioGroup
          name="period"
          value={period}
          onChange={handlePeriodChange}
          row
          className={styles.radioGroup}
        >
       <FormControlLabel value="7" control={<Radio />} label="7 Days" className={ styles.radio} />
          <FormControlLabel value="30" control={<Radio />} label="30 Days" className={ styles.radio} />
          <FormControlLabel value="all" control={<Radio />} label="All-Time" className={ styles.radio} />
        </RadioGroup> */}
        
      <Board period={period} /> {/* Pass the selected period as a prop */}
        
    </>
  );
};

export default LeaderboardPage;
