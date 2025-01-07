import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './index.css';

function Section2(){
    return (
        <>
            <div className="section-container">
                <div className="hero-container-title" style={{ alignItems: 'center', paddingBottom: '0px', paddingTop: '25px' }}>
                    <h1 style={{ fontSize: '2.3em', color: '#043468',  fontWeight: 'bold' }}>TESTIMONIALS</h1>  
                </div>
            </div>
            <div className="section-container" style={{ justifyContent: 'center', gap: '100px' }}>
                <div className="testimonials-container">
                    <div className="quotes">"</div>
                    <p className="testimonials-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aut doloremque in aliquam! 
                    </p>
                </div>
                <div className="testimonials-container">
                    <div className="quotes">"</div>
                    <p className="testimonials-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aut doloremque in aliquam! 
                    </p>
                    <div className="testimonials-info-container">
                        <div className="testimonials-names">
                            <h3><span style={{ color: 'blue', fontWeight: 'bold' }}>@</span>Sara Lee</h3>
                            <h3 style={{ fontWeight: 'thin' }}>CFO of Acme Co</h3>
                        </div>
                    </div>
                </div>
                <div className="testimonials-container">
                    <div className="quotes">"</div>
                    <p className="testimonials-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aut doloremque in aliquam! 
                    </p>
                </div>
            </div>
        </>
    )
}

export default Section2;