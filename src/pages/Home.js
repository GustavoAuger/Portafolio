// src/pages/Home.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import Header from '../components/Header';
import SocialLinks from '../components/SocialLinks';
import portada from '../assets/imagenes/portada.png';
import '../assets/css/pages/Home.css';

const Home = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const textDevops = document.querySelector('.text-devops');
    const mainHeading = document.querySelector('.main-heading');
    const description = document.querySelector('.description');

    if (textDevops) observer.observe(textDevops);
    if (mainHeading) observer.observe(mainHeading);
    if (description) observer.observe(description);

    return () => {
      if (textDevops) observer.unobserve(textDevops);
      if (mainHeading) observer.unobserve(mainHeading);
      if (description) observer.unobserve(description);
    };
  }, []);

  return (
    <div className="Home">
      <Header />
      <SocialLinks />
      <div id="home">
        <section className="wap" id="sec-2">
          <div className="fluid">
            <div className="container alto">
              <div className="row align-items-center banner_to_right">
                <div className="col-lg-7 index_banner_left homepage_texto">
                  <p className="text-devops">DevOps & Development</p>
                  <h1 className="main-heading">Diseño infraestructuras. <br/> Desarrollo software. <br/> Entrego resultados. </h1>
                  <p className="description">
                  Desarrollo soluciones informáticas integrales, desde el código hasta la infraestructura, optimizando procesos y asegurando entornos robustos. 
                  <br/>
                    <Link to="/historia" className="link-sobre-mi">
                      Más sobre mí
                    </Link>
                  </p>
                  <div className="whatsapp-button">
                    <a href="https://wa.me/56990044068?text=¡Hola!%20Me%20gustaría%20saber%20más%20sobre%20tus%20servicios." 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="button-container"
                       aria-label="Contactar por WhatsApp">
                      <span className="whatsapp-text">Hablemos</span>
                      <FaWhatsapp className="whatsapp-icon" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-5 text-center">
                  <div className="homepage_banner animated bounceInUp">
                    <img src={portada} alt="Portada" />
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
