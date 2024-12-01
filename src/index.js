import React from 'react';
import ReactDOM from 'react-dom'; // ReactDOM es el encargado de hacer el render
import './index.css'; // Asegúrate de que este archivo exista
import App from './App'; // Asegúrate de que la ruta sea correcta

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // El div con id "root" en index.html
);
