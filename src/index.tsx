import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/reset.css';
import './assets/global-styles.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


