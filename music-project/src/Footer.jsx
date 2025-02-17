import React from 'react';
import './index.css';

function Footer() {
  return (
    <footer>
      <div className="footer-nav">
        <a href="#">Sobre nós</a>
        <a href="#">Termos de uso</a>
        <a href="#">Política de privacidade</a>
        <a href="#">FAQ</a>
        <a href="#">Ajuda</a>
      </div>
      <div className="copyright">
        <p>© 2024 Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
