import React from 'react';
import { motion } from 'framer-motion';

const Historia = () => {
  const timelineItems = [
    {
      title: "2018 - Presente",
      content: "Aprendí informática de manera autodidacta, enfocándome en frontend. Esto despertó mi interés por este campo. Aunque continué trabajando en Ingeniería Mecánica, complementé mi formación en informática con estudios vespertinos. Así logré consolidar mi transición hacia este ámbito."
    },
    {
      title: "Actualmente",
      content: "Me especializo en DevOps, con un enfoque integral en la creación de sistemas escalables, la automatización de procesos y la optimización del flujo de trabajo entre desarrollo y operaciones. Mi experiencia abarca desde la implementación de pipelines eficientes para CI/CD hasta la gestión de infraestructuras como código."
    },
    {
      title: "Desarrollo de Software",
      content: "También he trabajado en desarrollo de software, especialmente en backend, lo que me ha permitido adquirir una sólida comprensión de la arquitectura de sistemas y la creación de aplicaciones escalables. A través de metodologías ágiles, principalmente Scrum y Kanban, he colaborado de manera eficiente en equipos multifuncionales."
    }
  ];

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

            <div className="timeline-container">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="timeline-item mb-5"
                >
                  <div className="timeline-date">
                    <span>{item.title}</span>
                  </div>
                  <div className="timeline-content">
                    <p>{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="skills-container mt-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="row g-4"
              >
                <div className="col-md-6">
                  <div className="skill-card">
                    <h5>Habilidades Profesionales</h5>
                    <ul>
                      <li><i className="fa fa-check text-success me-2"></i>Implementación de pipelines CI/CD</li>
                      <li><i className="fa fa-check text-success me-2"></i>Gestión de infraestructuras como código</li>
                      <li><i className="fa fa-check text-success me-2"></i>Optimización de flujos de trabajo</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="skill-card">
                    <h5>Metodologías</h5>
                    <ul>
                      <li><i className="fa fa-check text-success me-2"></i>Scrum</li>
                      <li><i className="fa fa-check text-success me-2"></i>Kanban</li>
                      <li><i className="fa fa-check text-success me-2"></i>Metodologías ágiles</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Historia;
