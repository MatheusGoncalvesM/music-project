import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './index.css';
import manwearingphones from './assets/manwearingphones.png'

function Section1() {
    // Configura a referência e visibilidade para acionar a animação
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <div className="section-container">
            <motion.img
                ref={ref} 
                src={manwearingphones} 
                alt="Imagem animada"
                className="animated-image"
                initial={{ x: "120%", opacity: 0 }} 
                animate={isInView ? { x: "75%", opacity: 1 } : {}} 
                transition={{ ease: "easeOut", duration: 1.5, delay: 0.3 }} 
            />
        </div>
    );
}

export default Section1;
