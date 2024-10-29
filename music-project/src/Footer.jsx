import React from 'react'
import './index.css'

function Footer(){
    return(
        <div className="blog-layer-container">
            <div className="blog-layer-container2">
                <footer>
                    <div class="footerContainer">
                        <div class="socialIcons">
                            <a href=""><i class="fa-brands fa-facebook"></i></a>
                            <a href=""><i class="fa-brands fa-instagram"></i></a>
                            <a href=""><i class="fa-brands fa-twitter"></i></a>
                            <a href=""><i class="fa-brands fa-google-plus"></i></a>
                            <a href=""><i class="fa-brands fa-youtube"></i></a>
                        </div>
                    <div class="footerNav">
                        <ul><li><a href="">Home</a></li>
                            <li><a href="">News</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact Us</a></li>
                            <li><a href="">our Team</a></li>
                        </ul>
                    </div>
        
                    </div>
                    <div class="footerBottom">
                        <p>Copyright &copy;2023; Designed by <span class="designer">Matheus</span></p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer;