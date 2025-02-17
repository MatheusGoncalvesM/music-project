import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import './index.css';
import headset4 from './assets/headset4.png';
import color3 from './assets/color3.png';

function ProductsHero() {
    const controlsText = useAnimation();
    const controlsHeadset = useAnimation();
    const controlsColor = useAnimation();
    const controlsTextSecond = useAnimation();  

    useEffect(() => {
        controlsHeadset.start({ right: '10%', opacity: 1, transition: { duration: 0.7 } });
        controlsColor.start({ right: '10%', opacity: 1, transition: { duration: 0.7 } });

        controlsText.start({ x: '-400px', opacity: 1, transition: { duration: 0.7 } });

        setTimeout(() => {
            controlsTextSecond.start({ 
                opacity: 1, 
                y: '1px',  
                transition: { duration: 0.7 }
            });
        }, 700); 
    }, []);

    return (
        <div className="hero-container" style={{ minHeight: '80vh', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <motion.div 
                className="hero-container-title" 
                initial={{ x: 0, opacity: 1 }} 
                animate={controlsText}
                style={{ textAlign: 'center' }}
            >
                <h1 style={{ fontWeight: '100', fontSize: '1.5em' }}>NEW PRODUCTS</h1>

                <motion.h1 
                    style={{ fontWeight: 'bold', fontSize: '1.5em' }} 
                    initial={{ opacity: 0, y: '20px' }}  
                    animate={controlsTextSecond}
                >
                    EVERY WEEK
                </motion.h1>
            </motion.div>

            <motion.img 
                src={color3} 
                height={800} 
                initial={{ right: '0%', opacity: 0 }}
                animate={controlsColor}
                style={{ position: 'absolute', top: '45%', transform: 'translateY(-50%)' }}
                alt="Color Explosion"
            />

            <motion.img 
                src={headset4} 
                height={700} 
                initial={{ right: '0%', opacity: 0 }}
                animate={controlsHeadset}
                style={{ position: 'absolute', top: '40%', transform: 'translateY(-50%)' }}
                alt="Headset"
            />
        </div>
    );
}

export default ProductsHero;
