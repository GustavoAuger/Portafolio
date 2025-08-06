import React from 'react';
import SocialLinks from '../components/SocialLinks';
import '../assets/css/pages/Historia.css';
import { motion } from 'framer-motion';

export default function Historia({ onPrev, onNext }) {
  return (
    <section className="historia-section relative w-full h-screen overflow-hidden bg-black">
      {/* Social links en la esquina superior derecha */}
      <div className="social-links-container fixed top-4 right-4 z-20">
        <SocialLinks />
      </div>
      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row justify-center items-start px-6 pt-28 gap-12 max-w-screen-xl mx-auto">
        {/* Columna principal de historia */}
        <div className="flex-1 min-w-0">
          <div className="historia-content">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-start">
              <div className="text-white space-y-8">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="historia-title"
                >
                  Mi historia
                </motion.h1>
                <div className="space-y-4 historia-text">
                  <p className="text-lg leading-relaxed">
                    Desde muy joven me atrajo la tecnología. Mi primer acercamiento fue como hobby, programando circuitos con Raspberry Pi y Arduinos para experimentar cómo el software podía interactuar con el mundo físico. Aunque estudié Ingeniería Civil Mecánica —impulsado por mi afinidad con la física y la resolución de problemas—, siempre supe que mi verdadera pasión estaba en el mundo digital.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Mientras trabajaba en proyectos como ingeniero, me formé de manera autodidacta en desarrollo web, lo que me permitió conseguir mi primer empleo como desarrollador front-end. Esa experiencia marcó un punto de inflexión: entendí que quería dedicarme por completo al desarrollo de software. Más adelante, y con la reciente llegada de mi primer hijo, decidí tomar un trabajo más estable dentro del rubro de la ingeniería, pero con la convicción de profesionalizar mi camino en tecnología. Así, al terminar la pandemia, comencé a estudiar la carrera de Analista Programador en jornada vespertina, para compaginar el estudio con mis responsabilidades laborales y familiares.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Actualmente estoy titulado en ambas carreras y enfocado en backend y DevOps. He complementado mi formación con becas como la de Desafío Latam y Globant (DevOps), y actualmente curso Arquitectura Cloud con Talento Digital. Me mantengo en constante aprendizaje, con certificaciones en Python, Java, Azure, GitHub y Ciberseguridad. Fuera del trabajo, practico ajedrez y boxeo, dos disciplinas que fortalecen mi enfoque, estrategia y constancia. Si quieres, puedes retarme a una partida en <a href="https://www.chess.com/member/gustavoauger" target="_blank" rel="noopener noreferrer" className="text-green-400 underline hover:text-green-300">mi perfil de Chess.com</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Columna de cards */}
        <div className="flex-1 min-w-0 cardss">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="h4 mb-4 text-white">Intereses Personales</h2>
              <div className="space-y-4">
                <div className="interest-card p-4 mb-4 bg-gray-800 rounded-lg">
                  <i className="fas fa-chess-queen fa-3x mb-3 text-green-400"></i>
                  <h3 className="h5 mb-3 text-white">Ajedrez</h3>
                  <p className="text-gray-400">Practicante apasionado, disfruto de la estrategia y el desafío mental que ofrece este juego clásico.</p>
                </div>
                <div className="interest-card p-4 mb-4 bg-gray-800 rounded-lg">
                  <i className="fas fa-fist-raised fa-3x mb-3 text-green-400"></i>
                  <h3 className="h5 mb-3 text-white">Boxeo</h3>
                  <p className="text-gray-400">Practicante de boxeo, valoro la disciplina y la constancia que este deporte inculca.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
