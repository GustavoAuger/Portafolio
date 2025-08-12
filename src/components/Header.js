import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/style.css'; // 
import '../assets/css/animate.css'; // 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Cerrar el menú al hacer clic en un enlace
  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove('menu-open');
  };

  // Manejar el scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Manejar el clic fuera del menú
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.querySelector('.navbar-collapse');
      const toggler = document.querySelector('.navbar-toggler');
      
      if (isOpen && navbar && !navbar.contains(event.target) && event.target !== toggler) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid">
        <Link className="navbar-brand logo" to="/" onClick={closeMenu}>
          <img src={require('../assets/imagenes/gustavoLogo.png')} alt="Logo" width="80" height="80" />
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
            document.body.classList.toggle('menu-open', !isOpen);
          }}
          aria-label="Toggle navigation"
        >
          <span className={`navbar-toggler-icon ${isOpen ? 'open' : ''}`}></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeMenu}>
                <i className="fa fa-home me-1" aria-hidden="true"></i> Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/historia" onClick={closeMenu}>
                <i className="fa fa-user me-1" aria-hidden="true"></i> Sobre Mí
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/stacks" onClick={closeMenu}>
                <i className="fa fa-cubes me-1" aria-hidden="true"></i> Stacks
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/proyectos" onClick={closeMenu}>
                <i className="fa fa-code me-1" aria-hidden="true"></i> Proyectos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto" onClick={closeMenu}>
                <i className="fa fa-handshake me-1" aria-hidden="true"></i> Trabajemos Juntos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
