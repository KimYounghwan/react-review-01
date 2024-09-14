import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyClock3useMyTimeClock from './comp/MyClock3useMyTimeClock';
// import MyCounter from './comp/MyCounter';
// import MyCounter2 from './comp/MyCounter2';
// import MyCounter3 from './comp/MyCounter3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyClock3useMyTimeClock />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
