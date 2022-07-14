import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import HalloStateFull from './component/1stateFull/stateFull';
// import HalloStateLess from './component/1stateLess/sateLess';
// import Home from './component/2props/home/home';
// import Header from './component/updateComp/stateLess/header/header';
// import Header from './component/updateComp/stateFull/header/header';
import Update from './component/updateComp/stateFull/card/Update';
// import Update from './component/updateComp/Update';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Update />
    {/* <HalloStateFull /> */}
    {/* <HalloStateLess /> */}
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
