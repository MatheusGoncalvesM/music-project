import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './index.css';
import manwearingphones from './assets/manwearingphones.png';
import guitarimage2 from './assets/guitarimage2.png'

function Section1() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 }); 

    return (
        <>
        <div className="section-container"
        style={{
            alignItems: 'center'
        }}
        ref={ref}>
            <motion.div
                className="section-container-text"
                initial={{ x: "-100vw", opacity: 0 }}
                animate={isInView ? { x: "0%", opacity: 1 } : {}}
                transition={{ ease: "easeOut", duration: 0.6, delay: 0.1 }}
            >
                <h3 style={{ fontWeight: 'bold', fontSize: '1.2em', fontFamily: 'libre franklin' }}>
                    Lorem ipsum dolor sit amet. Id adipisci molestiae ab rerum error et consequatur enim ea recusandae unde et nostrum itaque qui earum consequatur et distinctio officiis.
                    Sit animi quia vel nesciunt Quis et voluptate nulla eos inventore sequi sit voluptatem rerum sed libero enim aut quibusdam iure.
                </h3>
            </motion.div>
            <motion.img
                src={manwearingphones}
                alt="Homem Usando Fone de Ouvido"
                className="animated-image"
                initial={{ x: "100vw", opacity: 0 }}
                animate={isInView ? { x: "0%", opacity: 1 } : {}}
                transition={{ ease: "easeOut", duration: 0.6, delay: 0.1 }}
            />
        </div>
        <div className="section-container"
        style={{
            alignItems: 'center',
        }}
        ref={ref}>
            <motion.img
                src={guitarimage2} 
                height={600} 
                width={600} 
                alt="Pessoa Tocando Guitarra"
                className="animated-image"
                style={{
                    width: "600px",
                    height: "600px",
                    objectFit: "cover",
                    clipPath: "path('M297.1 2.5c68.3 6.7 161.8 .5 191.6 98.8 30.4 61.1 5.8 156.7-42.7 214.3-48.1 57.2-115.2 75.7-178.8 82.6-66.7 7.3-136.3-7.6-180.2-62.8C40.6 281.5 23 203.3 43.7 142.4 64.3 81.5 137.8 4.6 297.1 2.5z')"
                }}
                initial={{ x: "-100vw", opacity: 0 }}
                animate={isInView ? { x: "10%", y: "10%", opacity: 1 } : {}}
                transition={{ ease: "easeOut", duration: 0.6, delay: 0.1 }}
            />
            <motion.div
                className="section-container-text"
                initial={{ x: "100vw", opacity: 0 }}
                animate={isInView ? { x: "0%", opacity: 1 } : {}}
                transition={{ ease: "easeOut", duration: 0.6, delay: 0.1 }}
            >
                <h3 style={{ fontWeight: 'bold', fontSize: '1.2em', fontFamily: 'libre franklin' }}>
                    Lorem ipsum dolor sit amet. Id adipisci molestiae ab rerum error et consequatur enim ea recusandae unde et nostrum itaque qui earum consequatur et distinctio officiis.
                    Sit animi quia vel nesciunt Quis et voluptate nulla eos inventore sequi sit voluptatem rerum sed libero enim aut quibusdam iure.
                </h3>
            </motion.div>
        </div>
        <div className="section-container" style={{
            paddingTop: '500px',
            gap: '20px',
            flexDirection: 'column',
            alignItems: 'center'
        }} ref={ref}>
            <div className="section-container-pillars">
                <div className="pillar-wrapper">
                    <div className="pillarimages"></div>
                    <div className="pillars pillars1"></div>
                </div>
                <div className="pillar-wrapper">
                    <div className="pillarimages"></div>
                    <div className="pillars pillars2"></div>
                </div>
                <div className="pillar-wrapper">
                    <div className="pillarimages"></div>
                    <div className="pillars pillars3"></div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Section1;
