import React, { useState, useEffect } from "react";

const UseEffectTest2 = () => {
  const [count, setCount] = useState(0);
  const countUp = () => setCount(count + 1);

  useEffect(() => {
    console.log("useEffect2!!", count);
  }, []);

  return (
    <div>
      <p>UseEffectTest2 {count}번 클릭!</p>
      <button onClick={countUp}>Click Me</button>
    </div>
  );
};
export default UseEffectTest2;
