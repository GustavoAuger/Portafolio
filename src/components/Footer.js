import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-links">
      <div className="footer-social">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} />
        </a>
      </div>
      <div className="footer-copyright">
        {new Date().getFullYear()} Gustavo Auger. Todos los derechos reservados.
      </div>
    </div>
  );
};

export default Footer;