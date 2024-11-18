import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './index.css';
import manwearingphones from './assets/manwearingphones.png'

function Section1() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });


    return (
        <div className="section-container">
            <div className="section-container-text">
                <h3 style={{ fontWeight: 'bold', fontSize: '1.2em', fontFamily: 'libre franklin' }}> Lorem ipsum dolor sit amet. 
                Id adipisci molestiae ab rerum error et consequatur enim ea recusandae unde et nostrum itaque qui earum consequatur et distinctio officiis.
                Sit animi quia vel nesciunt Quis et voluptate nulla eos inventore sequi sit voluptatem rerum sed libero enim aut quibusdam iure.</h3>
            </div>
            <motion.img
                ref={ref} 
                src={manwearingphones} 
                alt="Homem Usando Fone de Ouvido"
                className="animated-image"
                initial={{ x: "160%", opacity: 0 }} 
                animate={isInView ? { x: "75%", opacity: 1 } : {}} 
                transition={{ ease: "easeOut", duration: .8, delay: 0.3 }} 
            />
        </div>
    );
}

export default Section1;
