import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/style.css'; // 
import '../assets/css/animate.css'; // 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand logo" to="/">
          <img src={require('../assets/imagenes/gustavoLogo.png')} alt="Logo" width="80" height="80" />
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto esp">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                <i className="fa fa-home" aria-hidden="true"></i> Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/historia">
                <i className="fa fa-user" aria-hidden="true"></i> Mi Historia
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/stacks">
                <i className="fa fa-cubes" aria-hidden="true"></i> Stacks
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                <i className="fa fa-code" aria-hidden="true"></i> Proyectos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">
                <i className="fa fa-handshake" aria-hidden="true"></i> Trabajemos Juntos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
