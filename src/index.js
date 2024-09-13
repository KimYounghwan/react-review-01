import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import UseEffectTest1 from './comp/UseEffectTest1';
// import UseEffectTest2 from './comp/UseEffectTest2';
// import UseEffectTest3 from './comp/UseEffectTest3';
// import MyClock from './comp/MyClock';
// import MyCountdown from './comp/MyCountdown';
import MyCounter from './comp/MyCounter';
import MyCounter2 from './comp/MyCounter2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyCounter2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
