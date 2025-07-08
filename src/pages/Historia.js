import React from 'react';
import { motion } from 'framer-motion';

const Historia = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="historia min-vh-100 d-flex align-items-center"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="display-4 mb-5"
            >
              Mi Historia
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-5"
            >
              <p className="lead">
                Ingeniero Civil Mecánico titulado, pero mi verdadera pasión siempre fue la tecnología. Desde 2018, me adentré al mundo de la programación de manera autodidacta, destacando inicialmente en frontend. Este primer paso me abrió las puertas a una carrera en desarrollo de software, combinando mi experiencia en gestión industrial con la innovación tecnológica. 
                <br/><br/>
                Con el tiempo, la programación se convirtió en mi principal enfoque, lo que me llevó a formalizar mis estudios en este campo. Actualmente, me especializo en DevOps y desarrollo backend, donde encuentro mi verdadera vocación en la creación de sistemas robustos y la optimización de procesos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-5"
            >
              <h2 className="h4 mb-4">Intereses Personales</h2>
              <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                  <div className="interest-card p-4 mb-4">
                    <i className="fas fa-chess-queen fa-3x mb-3"></i>
                    <h3 className="h5 mb-3">Ajedrez</h3>
                    <p>Practicante apasionado, disfruto de la estrategia y el desafío mental que ofrece este juego clásico.</p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="interest-card p-4 mb-4">
                    <i className="fas fa-fist-raised fa-3x mb-3"></i>
                    <h3 className="h5 mb-3">Boxeo</h3>
                    <p>Practicante de boxeo, valoro la disciplina y la constancia que este deporte inculca.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Historia;
