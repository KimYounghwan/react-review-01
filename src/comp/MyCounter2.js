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
  
  useInterval(() => {
    setCount((count) => count + 1);
  }, delay);

  function startCounter(e){
    setDelay(1000)
  }
  function stopCounter(e){
    setDelay(null)
  }
  return (
      <div>
          <button onClick={startCounter}>시작</button>
          <button onClick={stopCounter}>중지</button>
          <h1>{count}</h1>
      </div>
  );
}

export default MyCounter2;