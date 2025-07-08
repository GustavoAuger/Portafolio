// src/pages/Home.js
import React from 'react';

import Header from '../components/Header'; // Importar Header
import SocialLinks from '../components/SocialLinks'; // Importar SocialLinks
import gustavoLogoTxt from '../assets/imagenes/gustavoLogoTxt.png'; // Importar la imagen
import portada from '../assets/imagenes/portada.png'; // Importar la otra imagen


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
                  <img src={gustavoLogoTxt} className="heading" alt="Gustavo Logo" /> {/* Usamos la imagen importada */}
                  <p className="sub-heading-1"></p>
                </div>
                <div className="col-lg-5 text-center">
                  <div className="homepage_banner animated bounceInUp">
                    <img src={portada} alt="Portada" /> {/* Usamos la imagen importada */}
                  </div>
                </div>
              </div>
              {/* Particles.js */}
              <div className="animated zoomIn" id="particles-js" style={{ height: '100vh' }}></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
