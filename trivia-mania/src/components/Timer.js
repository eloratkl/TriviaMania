import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialTime, onTimerEnd, updateTimeUsed, isRunning }) => {
  const [totalSeconds, setTotalSeconds] = useState(initialTime);
  const [minutes, setMinutes] = useState(Math.floor(initialTime / 60));
  const [seconds, setSeconds] = useState(initialTime % 60);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isRunning && (totalSeconds > 0)) {
        const newTotalSeconds = totalSeconds - 1;
        setTotalSeconds(newTotalSeconds);
        setMinutes(Math.floor(newTotalSeconds / 60));
        setSeconds(newTotalSeconds % 60);
        updateTimeUsed(1); // Update parent component with 1 second used
      } else if(totalSeconds === 0){
        clearInterval(timer);
        onTimerEnd(); // Trigger an action when the timer reaches zero
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [totalSeconds, onTimerEnd, updateTimeUsed, isRunning ]);


  return (
    <>
    {isRunning && 
    <div>
      {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
    </div>
    }
    </>
  );
};

export default CountdownTimer;

