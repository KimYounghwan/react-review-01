import React, { useRef } from 'react';
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
  //state에 함수를 저장하려면 함수를 반환하는 함수를 제공해야한다.
	const [cbfn, setCbfn] = useState(()=>()=>{
    setCount((count) => count + 1);
  });

  // let increase = ()=>()=>{
  //   setCount((count) => count + 1);
  // };
  // let descrease = ()=>()=>{
  //   setCount((count) => count - 1);
  // };
  //증가하는 카운터
  //감소하는 카운터

  useInterval(cbfn, delay);

  function startCounter(e){
    setDelay(1000)
  }
  function stopCounter(e){
    setDelay(null)
  }
  function downCounter(e){
    setCbfn(()=>()=>{
      setCount((count) => count - 1);
    })
  }
  function upCounter(e){
    setCbfn(()=>()=>{
      setCount((count) => count + 1);
    })
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