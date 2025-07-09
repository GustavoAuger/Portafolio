import React from 'react';
import { motion } from 'framer-motion';
import SocialLinks from '../components/SocialLinks';
import '../assets/css/pages/Historia.css';

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
              Durante mis primeros años laborales, mientras encontraba trabajos esporádicos como ingeniero, me formé de manera autodidacta en desarrollo web. Esto me llevó a conseguir mi primer empleo como desarrollador front-end, una experiencia que confirmó lo que ya sospechaba: me había equivocado de carrera.

Poco después, y tras convertirme en padre, opté por una mejor oportunidad laboral dentro del rubro de la ingeniería, pero con la decisión firme de formalizar mi formación en tecnología. Al finalizar la pandemia, comencé a estudiar de forma vespertina la carrera de Analista Programador.

Hoy en día estoy titulado en ambas disciplinas —Ingeniería Civil Mecánica y Analista Programador— y me especializo en desarrollo backend y DevOps. He complementado mi formación con becas como la de Desafío Latam y Globant (DevOps), y actualmente curso un programa de Arquitectura Cloud a través de Talento Digital. Además, sigo aprendiendo por mi cuenta, lo que me ha permitido certificarme en tecnologías como Python, Java, Azure, GitHub y Ciberseguridad.

Fuera del ámbito profesional, me apasiona el ajedrez y practico boxeo como disciplina. Estas aficiones, al igual que la tecnología, han fortalecido mi perseverancia, enfoque y toma de decisiones.
Soy también padre de dos hijos, lo que me motiva aún más a crecer día a día, tanto personal como profesionalmente.
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-5"
            >
              <SocialLinks />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Historia;
