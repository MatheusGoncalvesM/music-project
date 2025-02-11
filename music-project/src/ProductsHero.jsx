import './index.css'
import headset4 from './assets/headset4.png'
import color3 from './assets/color3.png'

function ProductsHero(){
    return(
        <div className="hero-container" style={{ minHeight: '80vh', height: 'auto', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="hero-container-title" style={{ alignItems: 'center', textAlign: 'center' }}>
                <h1 style={{ fontWeight: '100', fontSize: '1.5em' }}>NEW PRODUCTS</h1>
                <h1 style={{ fontWeight: 'bold', fontSize: '1.5em' }}>EVERY WEEK</h1>
            </div>
            <img 
                src={color3} 
                height={800} 
                style={{ 
                    objectFit: 'contain', 
                    position: 'absolute', 
                    transform: 'rotate(36deg)', 
                    right: '0', 
                    top: '45%', 
                    transform: 'translateY(-50%)',
                }} 
                alt="Color Explosion"
            />
           <img 
                src={headset4} 
                height={700} 
                style={{ 
                    objectFit: 'contain', 
                    position: 'absolute', 
                    right: '5%', 
                    top: '40%', 
                    transform: 'translateY(-50%)'
                }} 
                alt="Headset"
            />
        </div>
    )
}

export default ProductsHero