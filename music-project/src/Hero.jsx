import './index.css'
import guitarmusic from './assets/guitarmusic.png'

function Hero(){
    return(
        <div className="hero-container">
            <img 
            src={guitarmusic} 
            height={500} 
            style={{ objectFit: 'contain', position: 'relative', transform: 'rotate(-10deg)'}} alt="Guitar"
            />
            <div className="hero-container-title">
                <h1 style={{ fontWeight: '100' }}>WHERE<br/> WORDS FAIL</h1>
                <h1 style={{ fontSize: '2.3em', fontWeight: 'bold' }}>MUSIC SPEAKS</h1>  
            </div>
        </div>
    )
}

export default Hero