import React from 'react';
import { motion } from 'framer-motion';
import SocialLinks from '../components/SocialLinks';
import '../assets/css/pages/Contacto.css';

const Contacto = () => {
  return (
    <section> 
        <SocialLinks />
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="contacto min-vh-100 d-flex align-items-center"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="display-4 mb-5"
            >
              Contacto
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-5"
            >
              <div className="contacto-content p-4 rounded bg-light shadow-sm">
                <div className="row">
                  <div className="col-12 col-md-6 mb-4">
                    <div className="contacto-info d-flex align-items-center">
                      <i className="fas fa-envelope fa-2x me-3 text-primary"></i>
                      <div>
                        <h4 className="mb-1">Correo Electrónico</h4>
                        <p className="mb-0">gustavoauger@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 mb-4">
                    <div className="contacto-info d-flex align-items-center">
                      <i className="fas fa-mobile-alt fa-2x me-3 text-primary"></i>
                      <div>
                        <h4 className="mb-1">Teléfono</h4>
                        <p className="mb-0">+56 9 1234 5678</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mb-4">
                    <div className="contacto-info d-flex align-items-center">
                      <i className="fas fa-map-marker-alt fa-2x me-3 text-primary"></i>
                      <div>
                        <h4 className="mb-1">Ubicación</h4>
                        <p className="mb-0">Santiago, Chile</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-5"
            >
            
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
    </section>
  );
};

export default Contacto;
