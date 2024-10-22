import React from 'react';
import Hero from './Hero.jsx';
import Navbar from './Navbar.jsx';
import ParticlesComponent from './particles.jsx';

function NavHeroParticle() {
  return (
    <div style={{ position: 'relative' }}>
      {/* Envolvendo o Navbar e Hero em uma div, garantindo que as partículas só cubram essa área */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="background">
          <Navbar />
          <Hero />
        </div>
      </div>
      {/* As partículas devem ser limitadas a essa área */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%', // Ajuste a altura conforme a soma do tamanho da Navbar e Hero
        zIndex: 0,
        pointerEvents: 'none' // Evitar que interfira nas interações da página
      }}>
        <ParticlesComponent />
      </div>
    </div>
  );
}

export default NavHeroParticle;
