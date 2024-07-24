import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Se tiver estilos globais
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando Bootstrap
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);