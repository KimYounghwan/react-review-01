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
            return () => clearInterval(id);
        }
    }, [delay]);
}

function MyCounter2(props) {
	const [count, setCount] = useState(0);
  
  useInterval(() => {
    setCount((count) => count + 1);
  }, 1000);

  function startCounter(e){
  }
  function stopCounter(e){
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