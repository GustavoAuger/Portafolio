// src/components/Banner.js
import React from 'react';

const Banner = () => (
  <section className="wap" id="sec-2">
    <div className="fluid bg-midnight">
      <div className="container alto">
        <div className="row align-items-center banner_to_right">
          <div className="col-lg-7 index_banner_left homepage_texto" style={{ visibility: 'inherit', opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)' }}>
            <img src="imagenes/gustavoLogoTxt.png" className="heading" alt="Logo texto" /><br />
            <p className="sub-heading-1"><br /></p>
          </div>
          <div className="col-lg-5" style={{ visibility: 'inherit', opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)' }}>
            <div className="text-center">
              <div className="homepage_banner animated bounceInUp">
                <img src="imagenes/portada.png" alt="Portada" />
              </div>
            </div>
          </div>
          <div className="animated zoomIn" id="particles-js" style={{ height: '100hv!important' }}></div>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
