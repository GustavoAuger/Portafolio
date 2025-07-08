import React from "react";
import ReactDOM from "react-dom/client"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';  
import App from './App';  
import './utils/utils.js'; 



// Crear la raíz para la renderización
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza la aplicación usando createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
