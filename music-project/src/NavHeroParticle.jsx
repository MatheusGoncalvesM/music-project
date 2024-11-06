import React from 'react';
import Hero from './Hero.jsx';
import Navbar from './Navbar.jsx';
import ParticlesComponent from './particles.jsx';

function NavHeroParticle() {
  return (
        <div className="background">
          <Navbar />
          <Hero />
        </div>
  );
}

export default NavHeroParticle;
