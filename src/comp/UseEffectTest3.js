import React, { useState, useEffect } from "react";

const UseEffectTest3 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("GodDaeHee");
  const countUp = () => setCount(count + 1);
  const handleChangeName = (e) => setName(e.target.value);

  useEffect(() => {
    console.log("useEffect!!", count);
  }, [count]);

  return (
    <div>
      <p>안녕하세요. {name} 입니다.</p>
      <input onChange={handleChangeName} />
      <p>{count}번 클릭!</p>
      <button onClick={countUp}>Click Me</button>
    </div>
  );
};

export default UseEffectTest3;
