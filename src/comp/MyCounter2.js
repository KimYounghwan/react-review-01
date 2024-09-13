import React, { useCallback, useRef } from 'react';
import { useState, useEffect } from 'react';

function useInterval(callback, delay) {
	const savedCallback = useRef();
    
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  
  useEffect(() => {
    function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
          return () => {console.log("clearInterval"); clearInterval(id);}
      }
  }, [delay]);
}

function MyCounter2(props) {
  const [delay, setDelay] = useState(null);
	const [count, setCount] = useState(0);
  const upCallback = useCallback(()=>()=>{
    setCount((count) => count + 1);
  })
  const downCallback = useCallback(()=>()=>{
    setCount((count) => count - 1);
  })
  //state에 함수를 저장하려면 함수를 반환하는 함수를 제공해야한다.
	const [cbfn, setCbfn] = useState(upCallback);

  
  useInterval(cbfn, delay);
  
  function startCounter(e){
    setDelay(1000)
  }
  function stopCounter(e){
    setDelay(null)
  }
  //감소하는 카운터
  function downCounter(e){
    setCbfn(downCallback)
  }
  //증가하는 카운터
  function upCounter(e){
    setCbfn(upCallback)
  }
  return (
      <div>
          <button onClick={startCounter}>시작</button>
          <button onClick={stopCounter}>중지</button>
          <button onClick={upCounter}>올라가는 카운터</button>
          <button onClick={downCounter}>내려가는 카운터</button>
          <h1>{count}</h1>
      </div>
  );
}

export default MyCounter2;