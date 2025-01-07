import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './index.css';
import randomperson1 from './assets/randomperson1.jpg'
import randomperson2 from './assets/randomperson2.jpg'
import randomperson3 from './assets/randomperson3.jpg'

function Section2(){
    return (
        <>
            <div className="section-container">
                <div className="hero-container-title" style={{ alignItems: 'center', paddingBottom: '0px', paddingTop: '25px' }}>
                    <h1 style={{ fontSize: '2.3em', color: '#043468',  fontWeight: 'bold' }}>TESTIMONIALS</h1>  
                </div>
            </div>
            <div className="section-container" style={{ justifyContent: 'center', gap: '100px', padding: '50px'}}>
            <div className="testimonials-container">
                    <div className="quotes">"</div>
                    <p className="testimonials-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aut doloremque in aliquam! 
                    </p>
                    <div className="testimonials-info-container">
                        <div className="testimonials-names">
                            <h3><span style={{ color: 'rgb(0, 9, 141)' }}>@</span> John Mccarthy</h3>
                            <h3 style={{ fontWeight: '400' }}>Producer</h3>
                        </div>
                        <img src={randomperson1}
                        className="testimonials-profile"
                        />
                    </div>
                </div>
                <div className="testimonials-container">
                    <div className="quotes">"</div>
                    <p className="testimonials-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aut doloremque in aliquam! 
                    </p>
                    <div className="testimonials-info-container">
                        <div className="testimonials-names">
                            <h3><span style={{ color: 'rgb(0, 9, 141)' }}>@</span> Elisa Normand</h3>
                            <h3 style={{ fontWeight: '400' }}>Aspiring Musician</h3>
                        </div>
                        <img src={randomperson2}
                        className="testimonials-profile"
                        />
                    </div>
                </div>
                <div className="testimonials-container">
                    <div className="quotes">"</div>
                    <p className="testimonials-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aut doloremque in aliquam! 
                    </p>
                    <div className="testimonials-info-container">
                        <div className="testimonials-names">
                            <h3><span style={{ color: 'rgb(0, 9, 141)' }}>@</span> Kenny Laurence</h3>
                            <h3 style={{ fontWeight: '400' }}>CEO of FRE Corp</h3>
                        </div>
                        <img src={randomperson3}
                        className="testimonials-profile"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section2;