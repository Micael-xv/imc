import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // renderiza o app dentro de document.getElementById('root'), ele joga esse componente na div da index com o id root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
