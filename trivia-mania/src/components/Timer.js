import React, { useState, useEffect } from 'react';


const CountdownTimer = ({ initialTime, onTimerEnd, updateTimeUsed }) => {
  const [seconds, setSeconds] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(prevSeconds => prevSeconds - 1);
        updateTimeUsed(1); // Update parent component with 1 second used
      } else {
        clearInterval(timer);
        onTimerEnd(); // Trigger an action when the timer reaches zero
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, onTimerEnd, updateTimeUsed]);

  return <div>{seconds} seconds</div>;
};

export default CountdownTimer;
