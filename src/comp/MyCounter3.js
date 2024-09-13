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

function MyCounter3(props) {
    const [delay, setDelay] = useState(1000);
    const [count, setCount] = useState(0);
  
    // 카운터 증가
    useInterval(() => {
      setCount(count + 1);
    }, delay);
  
    // 카운터 속도 증가
    useInterval(() => {
      if (delay > 10) {
        setDelay(delay / 2);
      }
    }, 1000);
  
    function handleReset() {
      setDelay(1000);
    }
  
    return (
      <>
        <h1>Counter: {count}</h1>
        <h4>Delay: {delay}</h4>
        <button onClick={handleReset}>
          Reset delay
        </button>
      </>
    );
}

export default MyCounter3;