import React from 'react';
import SocialLinks from '../components/SocialLinks';
import '../assets/css/pages/Historia.css';

export default function Historia({ onPrev, onNext }) {
  return (
    <section className="">
      {/* Social links en la esquina superior derecha */}
      <div className="social-links-container fixed top-4 right-4 z-20">
        <SocialLinks />
      </div>

      


    </section>
  );
}
