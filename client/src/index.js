import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppAuth from "./App-Auth";
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    < AppAuth />
     
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.unregister();
