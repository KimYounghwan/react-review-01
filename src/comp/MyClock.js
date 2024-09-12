import React from 'react';
import { useState, useEffect } from 'react';

function useClock(props) {
  const [time, setTime] = useState();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toTimeString().split(" ")[0])
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return time;
}

function MyClock(props) {

    const timer = useClock();
    return (
        <div>
            <h1>{timer}</h1>
        </div>
    );
}

export default MyClock;