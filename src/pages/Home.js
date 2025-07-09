// src/pages/Home.js
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Header from '../components/Header';
import SocialLinks from '../components/SocialLinks';
import portada from '../assets/imagenes/portada.png';
import '../assets/css/pages/Home.css';

const Home = () => {
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
                  <h1 className="main-heading">Un texto que impacte</h1>
                  <p className="description">
                    Diseño de soluciones informáticas a nivel de código y arquitectura/infraestructura
                  </p>
                  <div className="whatsapp-button">
                    <div className="button-container">
                      <span>Hablemos</span>
                      <FaWhatsapp className="whatsapp-icon" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 text-center">
                  <div className="homepage_banner animated bounceInUp">
                    <img src={portada} alt="Portada" />
                  </div>
                </div>
              </div>
              <div className="animated zoomIn" id="particles-js" style={{ height: '100vh' }}></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
