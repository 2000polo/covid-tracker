import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CovidData from './Context/CovidData';


ReactDOM.render(
  <React.StrictMode>
    <CovidData >
      <App />
    </CovidData>
  </React.StrictMode>,
  document.getElementById('root')
);

