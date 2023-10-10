import React, { useState, useEffect } from 'react';
import Profiles from './profiles'; // Import the Profiles component
import { Leaderboard } from './database';
import styles from "./Board.module.css"

export default function Board({ period }) {
  const [filteredLeaderboard, setFilteredLeaderboard] = useState([]);

  useEffect(() => {
    const today = new Date();
    const previous = new Date(today);

    switch (period) {
      case '7':
        previous.setDate(previous.getDate() - 7);
        break;
      case '30':
        previous.setDate(previous.getDate() - 30);
        break;
      default:
        previous.setFullYear(2000, 0, 1);
        break;
    }

    const filter = Leaderboard.filter((val) => {
      const userDate = new Date(val.dt);
      return previous <= userDate && today >= userDate;
    });

    const sortedLeaderboard = filter.sort((a, b) => b.score - a.score);

    setFilteredLeaderboard(sortedLeaderboard);
  }, [period]);

  return (
    <div className={styles.board}>

      <div className={styles.duration}>
        <Profiles Leaderboard={filteredLeaderboard} period={period} />
      </div>
    </div>
  );
}
