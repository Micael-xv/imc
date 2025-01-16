import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // aqui eu estou importando o component 

const root = ReactDOM.createRoot(document.getElementById('root')); // renderiza o app dentro de document.getElementById('root'), ele joga esse componente na div da index com o id root
root.render(
  <React.StrictMode>
    <App /> {/* aqui eu estou renderizando o componente App */}
  </React.StrictMode>
);