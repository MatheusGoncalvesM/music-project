import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './index.css';
import manwearingphones from './assets/manwearingphones.png';
import guitarimage2 from './assets/guitarimage2.png';

// Componente reutilizável para Texto Animado
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

// Componente reutilizável para Imagem Animada
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

// Componente reutilizável para Pilares
function Pillar({ pillarClass, bottomOffset }) {
    return (
        <div className="pillar-wrapper">
            <div className="pillarimages" style={{ bottom: bottomOffset }}></div>
            <div className={pillarClass}></div>
        </div>
    );
}

function Section1() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const sampleText = `
        Lorem ipsum dolor sit amet. Id adipisci molestiae ab rerum error et consequatur enim ea recusandae unde et nostrum itaque qui earum consequatur et distinctio officiis.
        Sit animi quia vel nesciunt Quis et voluptate nulla eos inventore sequi sit voluptatem rerum sed libero enim aut quibusdam iure.
    `;

    return (
        <>
            <div className="section-container" style={{ alignItems: 'center' }} ref={ref}>
                <AnimatedText text={sampleText} initialX="-100vw" isInView={isInView} delay={0.1} />
                <AnimatedImage
                    src={manwearingphones}
                    alt="Homem Usando Fone de Ouvido"
                    initialX="100vw"
                    isInView={isInView}
                    delay={0.1}
                />
            </div>
            <div className="section-container" style={{ alignItems: 'center' }} ref={ref}>
                <AnimatedImage
                    src={guitarimage2}
                    alt="Pessoa Tocando Guitarra"
                    initialX="-100vw"
                    isInView={isInView}
                    delay={0.1}
                    style={{
                        width: "600px",
                        height: "600px",
                        objectFit: "cover",
                        clipPath: "path('M297.1 2.5c68.3 6.7 161.8 .5 191.6 98.8 30.4 61.1 5.8 156.7-42.7 214.3-48.1 57.2-115.2 75.7-178.8 82.6-66.7 7.3-136.3-7.6-180.2-62.8C40.6 281.5 23 203.3 43.7 142.4 64.3 81.5 137.8 4.6 297.1 2.5z')",
                    }}
                />
                <AnimatedText text={sampleText} initialX="100vw" isInView={isInView} delay={0.1} />
            </div>
            <div
                className="section-container"
                style={{
                    paddingTop: '50px',
                    gap: '20px',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                ref={ref}
            >
                <div className="section-container-pillars">
                    <Pillar pillarClass="pillars pillars1" bottomOffset="120px" />
                    <Pillar pillarClass="pillars pillars2" bottomOffset="300px" />
                    <Pillar pillarClass="pillars pillars3" bottomOffset="120px" />
                </div>
            </div>
        </>
    );
}

export default Section1;
