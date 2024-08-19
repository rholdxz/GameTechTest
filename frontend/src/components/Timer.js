import React, { useState, useEffect } from 'react';

const Timer = ({ initialTime, onTimeUp }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time > 0) {
      const timerId = setInterval(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearInterval(timerId);
    } else {
      onTimeUp();
    }
  }, [time, onTimeUp]);

  return (
    <div className="timer">
      Time Remaining: {time} seconds
    </div>
  );
};

export default Timer;