import React from 'react';
import { useState, useEffect } from 'react';
//useMyTimeClock() 커스텀 훅 사용하기

function useMyTimeClock() {
  const [time, setTime] = useState();

  useEffect(() => {
    const timer = setInterval(() => {
      //time 재설정 -> 화면 리렌더링
      setTime(new Date().toTimeString().split(" ")[0])
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return time;
}

function MyClock3useMyTimeClock(props) {

  const time = useMyTimeClock()
    
  return (
      <div>
          <h1>MyClock3UseClock</h1>
          <h1>{time}</h1>
      </div>
  );
}

export default MyClock3useMyTimeClock;