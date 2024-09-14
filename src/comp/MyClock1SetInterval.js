import React from 'react';
import { useState, useEffect } from 'react';

function MyClock1SetInterval(props) {
  const [time, setTime] = useState();

  useEffect(() => {
    console.log("useEffect")
    const timer = setInterval(() => {
      setTime(new Date().toTimeString().split(" ")[0])
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
    
  return (
      <div>
          <h1>Clock1</h1>
          <h1>{time}</h1>
      </div>
  );
}

export default MyClock1SetInterval;