import React from 'react';
import { useState, useEffect } from 'react';

function useCountdown(deadline) {
  const [time, setTime] = useState({days:"",hours:"",minutes:"",seconds:"",});
  // const [result, setResult] = useState({});
  //종속성 배열이 비어있으면 최초렌더링때와 언마운트할때만 호출된다.
  //리턴되는 함수는 언마운트때 호출된다. 아래코드엔 타이머 종료코드가 있다.
  //최초마운트때 타임 시작한다.
  //1초후 현재시간에서 시분초만 추출하여 반환한다.
  useEffect(() => {
    const timer = setInterval(() => {
      const diff = Date.parse(deadline) - Date.now();
      let tm = {}
      tm.days = Math.floor(diff / (1000 * 60 * 60 * 24));
      tm.hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      tm.minutes = Math.floor((diff / 1000 / 60) % 60);
      tm.seconds = Math.floor((diff / 1000) % 60);
      setTime(tm)
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return time;
}

function MyCountdown(props) {
  const deadline = "2024-09-13"
  const timer = useCountdown(deadline);
  return (
      <div>
          <h1>{deadline}까지 남은 시간</h1>
          <h1>{timer.days}일</h1>
          <h1>{timer.hours}시간</h1>
          <h1>{timer.minutes}분</h1>
          <h1>{timer.seconds}초</h1>
      </div>
  );
}

export default MyCountdown;