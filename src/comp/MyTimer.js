import React from 'react';
import { useState, useEffect } from 'react';

function useTimer(initialTime) {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [initialTime]);

  return time;
}

function MyTimer(props) {

    const timer = useTimer(0);
    return (
        <div>
            <h1>{timer}</h1>
        </div>
    );
}

export default MyTimer;