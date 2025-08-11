// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Historia from './pages/Historia';
import Stacks from './pages/Stacks';
import Contacto from './pages/Contacto';
import Proyectos from './pages/Proyectos';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/stacks" element={<Stacks />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/proyectos" element={<Proyectos />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
