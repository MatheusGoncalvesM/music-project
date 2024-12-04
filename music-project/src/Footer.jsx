import React from 'react'
import './index.css'

function Footer(){
    return(
        <footer>
          <ul class="footer-nav">
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Termos de uso</a></li>
            <li><a href="#">Política de privacidade</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Ajuda</a></li>
          </ul>
          <div class="copyright">
            <p>© 2024  Todos os direitos reservados.</p>
          </div>
      </footer>
    )
}

export default Footer;