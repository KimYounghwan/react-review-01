import { useMemo, useState } from "react";
import "./styles.css";
/*
저체중
18.5 kg/㎡

정상
18.5~22.9 kg/㎡

비전단계
23~24.9 kg/㎡

1단계 비만
25~29.9 kg/㎡

2단계 비만
30~34.9 kg/㎡

3단계 비만
≥35 kg/㎡
*/
const DEFAULT_WEIGHT = 100;
const DEFAULT_HEIGHT = 180;

export default function MyBmiCalculator() { 
  const [height, setHeight] = useState(DEFAULT_HEIGHT);
  const [weight, setWeight] = useState(DEFAULT_WEIGHT);

  function onHeightChange(event) {
    const inputHeight = event.target.value;
    setHeight(inputHeight);
  }

  function onWeightChange(event) {
    const inputWeight = event.target.value;
    setWeight(inputWeight);
  }

  const output = useMemo(() => {
    const calculatedHeight = height / 100;
    return (weight / (calculatedHeight * calculatedHeight)).toFixed(1);
  }, [weight, height]);

  return (
    <main>
      <h1>Project 7: BMI CALCULATOR</h1>
      <div className="input-section">
        <p class="slider-output">Weight: {weight} kg</p>
        <input
          className="input-slider"
          onChange={onWeightChange}
          type="range"
          step="1"
          min="40"
          max="220"
        />
        <p class="slider-output">Height: {height} cm</p>
        <input
          className="input-slider"
          onChange={onHeightChange}
          type="range"
          min="140"
          max="220"
        />
      </div>
      <div className="output-section">
        <p>Your BMI is</p>
        <p className="output">{output}</p>
      </div>
    </main>
  );
}
