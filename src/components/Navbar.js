// src/components/Navbar.js
import React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-expand-sm navbar-dark fixed-top barranegra ftj">
    <div className="container">
      <a className="navbar-brand logo" href="index.html">
        <img src="imagenes/gustavoLogo.png" width="80" height="80" alt="Logo" />
      </a>
      <button type="button" className="navbar-toggler nabvar-togler-left" data-toggle="collapse" data-target="#navbarSupportedContent">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto esp">
          <li className="nav-item active">
            <a className="nav-link" href="index.html"><i className="fa fa-home" aria-hidden="true"></i> Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="nosotros.html"><i className="fa fa-globe" aria-hidden="true"></i> AboutMe</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-scroll href="#sec-1"><i className="fa fa-rocket" aria-hidden="true"></i> Servicios</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-scroll href="#sec-2"><i className="fa fa-envelope" aria-hidden="true"></i> Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
