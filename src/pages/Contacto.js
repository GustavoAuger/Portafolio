import React from 'react';
import { motion } from 'framer-motion';
import SocialLinks from '../components/SocialLinks';
import '../assets/css/pages/Contacto.css';

const Contacto = () => {
  return (
    <section> 
      <SocialLinks />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="contacto min-vh-100 d-flex align-items-center py-5"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center mb-5">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="display-4 mb-3"
                style={{ color: '#00ff00' }}
              >
                Contacto
              </motion.h1>
            </div>
          </div>
          
          <div className="row justify-content-center">
            {/* Columna Izquierda */}
            <motion.div 
              className="col-10 col-md-8 col-lg-4 mb-4 mb-lg-0 me-lg-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="p-4 h-100">
                <h2 className="mb-4" style={{ color: '#00ff00' }}>¡Hablemos!</h2>
                <p className="lead mb-5 text-white">
                  ¿Tienes un proyecto en mente? Estoy disponible para trabajar en proyectos colaborativos o posibles contrataciones.
                </p>
                
                <div className="contact-info">
                  <div className="d-flex align-items-center mb-4">
                    <div className="icon-container rounded-circle d-flex align-items-center justify-content-center me-3" 
                         style={{
                           width: '50px', 
                           height: '50px',
                           backgroundColor: '#e91e63' // Rosa
                         }}>
                      <i className="fas fa-envelope fa-lg text-white"></i>
                    </div>
                    <div>
                      <h5 className="mb-0 text-white">Correo Electrónico</h5>
                      <a href="mailto:gauger.gac@gmail.com" className="text-white text-decoration-none">gauger.gac@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center mb-4">
                    <div className="icon-container rounded-circle d-flex align-items-center justify-content-center me-3" 
                         style={{
                           width: '50px', 
                           height: '50px',
                           backgroundColor: '#4caf50' // Verde
                         }}>
                      <i className="fab fa-whatsapp fa-lg text-white"></i>
                    </div>
                    <div>
                      <h5 className="mb-0 text-white">WhatsApp</h5>
                      <a href="https://wa.me/56990044068" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">+56 9 9004 4068</a>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center">
                    <div className="icon-container rounded-circle d-flex align-items-center justify-content-center me-3" 
                         style={{
                           width: '50px', 
                           height: '50px',
                           backgroundColor: '#2196f3' // Azul
                         }}>
                      <i className="fas fa-map-marker-alt fa-lg text-white"></i>
                    </div>
                    <div>
                      <h5 className="mb-0 text-white">Ubicación</h5>
                      <p className="mb-0 text-white">Villa Alemana, Chile</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Columna Derecha - Formulario */}
            <motion.div 
              className="col-10 col-md-8 col-lg-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="p-4 h-100">
              
                <form className="contact-form">
                  <div className="mb-3">
                    <label htmlFor="nombre" className="form-label text-white">Nombre:</label>
                    <input 
                      type="text" 
                      className="form-control bg-transparent text-white border-secondary" 
                      id="nombre" 
                      placeholder="Tu nombre"
                      required 
                      style={{
                        '::placeholder': { color: '#6c757d' },
                        ':-ms-input-placeholder': { color: '#6c757d' },
                        '::-ms-input-placeholder': { color: '#6c757d' }
                      }}
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label text-white">Email:</label>
                    <input 
                      type="email" 
                      className="form-control bg-transparent text-white border-secondary" 
                      id="email" 
                      placeholder="tu@email.com"
                      required 
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="mensaje" className="form-label text-white">Mensaje:</label>
                    <textarea 
                      className="form-control bg-transparent text-white border-secondary" 
                      id="mensaje" 
                      rows="5" 
                      placeholder="¿En qué puedo ayudarte?"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn w-100 py-2 mt-3"
                    style={{
                      background: 'linear-gradient(135deg, #FF00D9 0%, #003366 100%)',
                      border: 'none',
                      color: 'white',
                      fontSize: '1.1rem',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.transform = 'translateY(-3px)';
                      e.target.style.boxShadow = '0 5px 15px rgba(0, 255, 0, 0.3)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contacto;
