import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeManager } from './context/ThemesContext';

ReactDOM.render(
  <React.StrictMode>
  <ThemeManager>
    <App />
  </ThemeManager>
  </React.StrictMode>,
  document.getElementById('root')
);
