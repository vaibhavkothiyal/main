import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {LoginContextProvider} from './context/loginContext';


ReactDOM.render(
  <LoginContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </LoginContextProvider>,
  document.getElementById('root')
);

reportWebVitals();
