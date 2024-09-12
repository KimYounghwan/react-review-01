import React from 'react';
import { useState, useEffect } from 'react';

function useClock(props) {
  const [time, setTime] = useState();
  //종속성 배열이 비어있으면 최초렌더링때와 언마운트할때만 호출된다.
  //리턴되는 함수는 언마운트때 호출된다. 아래코드엔 타이머 종료코드가 있다.
  //최초마운트때 타임 시작한다.
  //1초후 현재시간에서 시분초만 추출하여 반환한다.
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