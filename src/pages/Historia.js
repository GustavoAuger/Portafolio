import React from 'react';
import SocialLinks from '../components/SocialLinks';
import '../assets/css/pages/Historia.css';

export default function Historia({ onPrev, onNext }) {
  return (
    <section className="historia-section relative w-full h-screen overflow-hidden bg-black">
      {/* Social links en la esquina superior derecha */}
      <div className="social-links-container fixed top-4 right-4 z-20">
        <SocialLinks />
      </div>

      {/* Contenedor principal */}
      <div className="historia-content">
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
          {/* Columna de la imagen */}

          {/* Columna del contenido */}
          <div className="text-white space-y-8 historia-text">
            <h2 className="text-4xl font-bold historia-title mb-6">Mi historia</h2>
            
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                Soy Gustavo, ingeniero reconvertido en desarrollador backend y DevOps. 
                Desde joven me apasionó la tecnología: mi primer contacto fue programando circuitos con Arduino y Raspberry Pi.
              </p>
              <p className="text-lg leading-relaxed">
                Aunque me titulé como Ingeniero Civil Mecánico, descubrí mi verdadera vocación en el mundo del desarrollo web, 
                formándome de manera autodidacta y trabajando como front-end.
              </p>
              <p className="text-lg leading-relaxed">
                Actualmente combino mis dos carreras, y me especializo en backend y DevOps, 
                con estudios complementarios en arquitectura cloud y certificaciones en Python, Java, Azure, GitHub y ciberseguridad.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Flechas de navegación */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-between px-10 z-20">
        <button
          onClick={onPrev}
          className="text-white text-3xl hover:text-green-400 transition p-2 rounded-full bg-black/30 hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black/30"
          aria-label="Anterior sección"
          tabIndex="0"
        >
          ←
        </button>
        <button
          onClick={onNext}
          className="text-white text-3xl hover:text-green-400 transition p-2 rounded-full bg-black/30 hover:bg-black-50 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black/30"
          aria-label="Siguiente sección"
          tabIndex="0"
        >
          →
        </button>
      </div>
    </section>
  );
}
