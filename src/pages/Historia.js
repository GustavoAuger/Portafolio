import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SocialLinks from '../components/SocialLinks';
import '../assets/css/pages/Historia.css';

const Historia = () => {
  const [activeTab, setActiveTab] = useState('historia');

  const tabContent = {
    historia: (
      <div className="tab-pane">
        <h1>Mi Historia</h1>
        <div className="text-content">
          <p>¡Hola! Soy Gustavo, un apasionado por la tecnología y el desarrollo de software. Mi viaje en el mundo de la programación comenzó cuando descubrí el poder de transformar ideas en soluciones digitales.</p>
          <p>Con una formación en Ingeniería Civil Mecánica, siempre me ha fascinado la resolución de problemas y el diseño de soluciones eficientes. Sin embargo, mi verdadera pasión por la programación se despertó al descubrir cómo podía combinar mi pensamiento lógico con la creatividad para crear aplicaciones que impacten positivamente en la vida de las personas.</p>
          <p>Mi enfoque se centra en el desarrollo web full-stack, con especial interés en crear experiencias de usuario excepcionales y aplicaciones escalables. Me encanta aprender nuevas tecnologías y metodologías que me permitan mejorar mis habilidades y ofrecer soluciones innovadoras.</p>
          <p>Fuera del mundo del código, disfruto del ajedrez, el boxeo y los videojuegos en equipo, actividades que no solo me permiten desconectar, sino que también me ayudan a desarrollar habilidades como el pensamiento estratégico, la disciplina y el trabajo en equipo.</p>
        </div>
      </div>
    ),
    educacion: (
      <div className="tab-pane">
        <h1>Educación</h1>
        <div className="education-grid">
          <div className="education-item">
            <h3>Ingeniería Civil Mecánica</h3>
            <p>PUCV, Valparaíso, Chile</p>
            <p>2008 - 2016</p>
          </div>
          <div className="education-item">
            <h3>Analista Programador Computacional</h3>
            <p>DUOC UC, Viña del Mar, Chile</p>
            <p>2023 - 2025</p>
          </div>
          <div className="education-item">
            <h3>Beca Desafío Latam - DevOps</h3>
            <p>Diciembre 2024 - Enero 2025</p>
            <p>Programa de especialización en DevOps</p>
          </div>
          <div className="education-item">
            <h3>Beca Desafío Latam - Arquitectura en la Nube</h3>
            <p>Junio 2025 - Octubre 2025</p>
            <p>Programa de especialización en Arquitectura en la Nube</p>
          </div>
        </div>
      </div>
    ),
    certificados: (
      <div className="tab-pane">
        <h1>Certificados</h1>
        <p>Aquí están mis certificados profesionales que respaldan mis habilidades técnicas:</p>
        <div className="certificates-grid">
          <div className="certificate-card">
            <h3>GitHub Foundations</h3>
            <p>Diciembre 2024</p>
            <a 
              href="https://goo.su/jMXX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button-glow"
            >
              Ver Certificado
            </a>
          </div>
          
          <div className="certificate-card">
            <h3>Cisco Cybersecurity</h3>
            <p>Diciembre 2024</p>
            <a 
              href="https://goo.su/vICzAK" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button-glow"
            >
              Ver Certificado
            </a>
          </div>
          
          <div className="certificate-card">
            <h3>Java Certified Foundations</h3>
            <p>Noviembre 2024</p>
            <a 
              href="https://goo.su/jbiP" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button-glow"
            >
              Ver Certificado
            </a>
          </div>
          
          <div className="certificate-card">
            <h3>Microsoft Azure Fundamentals</h3>
            <p>Noviembre 2024</p>
            <a 
              href="https://goo.su/49OXI" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button-glow"
            >
              Ver Certificado
            </a>
          </div>
          
          <div className="certificate-card">
            <h3>PCEP - Python Certified</h3>
            <p>Junio 2024</p>
            <a 
              href="https://goo.su/fVAhgR" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button-glow"
            >
              Ver Certificado
            </a>
          </div>
        </div>
      </div>
    ),
    intereses: (
      <div className="tab-pane">
        <h1>Intereses Personales</h1>
        <p>Fuera del mundo del desarrollo, disfruto de varias actividades que me ayudan a mantener un equilibrio en mi vida:</p>
        <div className="interests-grid">
          <div className="interest-card">
            <div className="icon">♟️</div>
            <h3>Ajedrez</h3>
            <p>El ajedrez es mi pasatiempo favorito. Me encanta cómo este juego estratégico desafía mi mente y me ayuda a mejorar mi capacidad de análisis y toma de decisiones.</p>
          </div>
          <div className="interest-card">
            <div className="icon">🥊</div>
            <h3>Boxeo</h3>
            <p>El boxeo me ha enseñado disciplina, resistencia mental y física. Es una excelente manera de mantenerse en forma y liberar el estrés.</p>
          </div>
          <div className="interest-card">
            <div className="icon">🎮</div>
            <h3>Videojuegos en Equipo</h3>
            <p>Disfruto jugar videojuegos multijugador que fomentan el trabajo en equipo y la comunicación, habilidades que también aplico en el desarrollo de software.</p>
          </div>
          <div className="interest-card">
            <div className="icon">🥾</div>
            <h3>Trekking</h3>
            <p>El trekking me permite conectar con la naturaleza, despejar mi mente y mantener un estilo de vida activo. Disfruto explorar nuevos senderos y superar desafíos al aire libre.</p>
          </div>
        </div>
      </div>
    )
  };

  return (
    <section className="historia-section">
      <div className="historia-container">
        {/* Columna de la imagen */}
        <motion.div 
          className="imagen-col"
          initial={{ y: -10 }}
          animate={{ 
            y: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="imagen-perfil"></div>
        </motion.div>

        {/* Columna del contenido */}
        <div className="contenido-col">
          {/* Pestañas de navegación */}
          <div className="tab-container">
            <button 
              className={`tab-button ${activeTab === 'historia' ? 'active' : ''}`}
              onClick={() => setActiveTab('historia')}
            >
              Mi Historia
            </button>
            <button 
              className={`tab-button ${activeTab === 'educacion' ? 'active' : ''}`}
              onClick={() => setActiveTab('educacion')}
            >
              Educación
            </button>
            <button 
              className={`tab-button ${activeTab === 'certificados' ? 'active' : ''}`}
              onClick={() => setActiveTab('certificados')}
            >
              Certificados
            </button>
            <button 
              className={`tab-button ${activeTab === 'intereses' ? 'active' : ''}`}
              onClick={() => setActiveTab('intereses')}
            >
              Intereses
            </button>
          </div>

          {/* Contenido de la pestaña activa */}
          {tabContent[activeTab]}
        </div>
      </div>
      
      {/* Botones de redes sociales */}
      <SocialLinks />
    </section>
  );
};

export default Historia;
