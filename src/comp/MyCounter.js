import React from 'react';
import { useState, useEffect } from 'react';

function useCounter(initialTime) {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      //화면갱신요청
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [initialTime]);

  return time;
}

function MyCounter(props) {
  const timer = useCounter(0);
  console.log("MyCounter timer="+timer)
  return (
      <div>
          <h1>{timer}</h1>
      </div>
  );
}

export default MyCounter;