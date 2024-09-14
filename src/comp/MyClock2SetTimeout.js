import React from 'react';
import { useState, useEffect } from 'react';

function MyClock2SetTimeout(props) {
  const [time, setTime] = useState();

  useEffect(() => {
    console.log("useEffect")
    const timer = setTimeout(() => {
      setTime(new Date().toTimeString().split(" ")[0])
    }, 1000); 
    
    return () => clearTimeout(timer);
  }, [time]);
    
  return (
      <div>
          <h1>Clock1</h1>
          <h1>{time}</h1>
      </div>
  );
}

export default MyClock2SetTimeout;