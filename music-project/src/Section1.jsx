import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './index.css';
import manwearingphones from './assets/manwearingphones.png';
import guitarimage2 from './assets/guitarimage2.png';
import clienticon from './assets/clienticon.png';
import securityicon from './assets/securityicon.png';
import moneyicon from './assets/moneyicon.png';

const text1 = `Experience true sound immersion with our high-quality headphones.
Designed for musicians and audiophiles, our headphones offer exceptional fidelity, capturing every nuance of the music. 
No matter the genre, our headphones provide a rich and detailed sound experience, allowing you to hear even the subtlest sounds.`;

const text2 = `Discover excellence in every chord with our superior-quality guitars. 
Built with premium materials and innovative design, our guitars are crafted to deliver flawless performance in any situation. 
Whether you're just starting your musical journey or are an experienced guitarist, our guitars provide a warm, clear, 
and powerful sound that adapts to all styles and preferences.`;

function AnimatedText({ text, initialX, isInView, delay }) {
    return (
        <motion.div
            className="section-container-text"
            initial={{ x: initialX, opacity: 0 }}
            animate={isInView ? { x: "0%", opacity: 1 } : {}}
            transition={{ ease: "easeOut", duration: 0.6, delay }}
        >
            <h3 style={{ fontWeight: 'bold', fontSize: '1.2em', fontFamily: 'libre franklin' }}>
                {text}
            </h3>
        </motion.div>
    );
}
''
function AnimatedImage({ src, alt, initialX, isInView, delay, style }) {
    return (
        <motion.img
            src={src}
            alt={alt}
            className="animated-image"
            style={style}
            initial={{ x: initialX, opacity: 0 }}
            animate={isInView ? { x: "0%", opacity: 1 } : {}}
            transition={{ ease: "easeOut", duration: 0.6, delay }}
        />
    );
}

function Pillar({ pillarClass, bottomOffset, delay, isInView, imageSrc }) {
    return (
        <motion.div
            className="pillar-wrapper"
            initial={{ y: '1vh', opacity: 0 }}
            animate={isInView ? { y: '0%', opacity: 1 } : {}}
            transition={{ ease: "easeOut", duration: 0.6, delay }}
        >
            <div
                className="pillarimages"
                style={{
                    backgroundImage: `url(${imageSrc})`,
                    bottom: bottomOffset
                }}
            ></div>
            <div className={pillarClass}></div>
        </motion.div>
    );
}

function Section1() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <>
            <div className="section-container" style={{ alignItems: 'center' }} ref={ref}>
                <div className="section-container-text">
                    <h3 style={{ fontWeight: 'bold', fontSize: '1.2em', fontFamily: 'libre franklin' }}>
                        {text1}
                    </h3>
                </div>
                <img src={manwearingphones} alt="Homem Usando Fone de Ouvido" className="animated-image" />
            </div>

            <div className="section-container" style={{ alignItems: 'center' }} ref={ref}>
                <img
                    src={guitarimage2}
                    alt="Pessoa Tocando Guitarra"
                    className="animated-image"
                    style={{
                        width: "600px",
                        height: "600px",
                        objectFit: "cover",
                        clipPath: "path('M297.1 2.5c68.3 6.7 161.8 .5 191.6 98.8 30.4 61.1 5.8 156.7-42.7 214.3-48.1 57.2-115.2 75.7-178.8 82.6-66.7 7.3-136.3-7.6-180.2-62.8C40.6 281.5 23 203.3 43.7 142.4 64.3 81.5 137.8 4.6 297.1 2.5z')",
                    }}
                />
                <div className="section-container-text">
                    <h3 style={{ fontWeight: 'bold', fontSize: '1.2em', fontFamily: 'libre franklin' }}>
                        {text2}
                    </h3>
                </div>
            </div>

            <div className="section-container">
                <div className="hero-container-title" style={{ alignItems: 'center' }}>
                    <h1 style={{ fontWeight: '100', color: '#043468' }}>QUALITY YOU CAN TRUST</h1>
                    <h1 style={{ fontSize: '2.3em', color: '#043468',  fontWeight: 'bold' }}>SERVICE YOU DESERVE</h1>  
                </div>
            </div>

            <div
                className="section-container"
                style={{
                    paddingTop: '50px',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                ref={ref}
            >
                <div className="section-container-pillars">
                    <Pillar pillarClass="pillars pillars1" bottomOffset="120px" delay={0.2} isInView={isInView} imageSrc={clienticon}/>
                    <Pillar pillarClass="pillars pillars2" bottomOffset="300px" delay={0.4} isInView={isInView} imageSrc={securityicon} />
                    <Pillar pillarClass="pillars pillars3" bottomOffset="120px" delay={0.6} isInView={isInView} imageSrc={moneyicon} />
                </div>
                <div className="pillars-line"></div>
            </div>
        </>
    );
}

export default Section1;
