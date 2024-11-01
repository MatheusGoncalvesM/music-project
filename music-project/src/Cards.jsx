import './index.css';
import fender1 from './assets/fender1.png';
import fenderguitar1 from './assets/fenderguitar1.png';
import gibsonlogo from './assets/gibsonlogo.png';
import gretschlogo from './assets/gretschlogo.png';
import ibanezlogo from './assets/ibanezlogo.png';
import tagimalogo from './assets/tagimalogo.png';

import React, { useState } from 'react';

function Cards() {

    let instruments = ["guitar1", "guitar2", "guitar3", "guitar4"]
    let logos = [gibsonlogo, gretschlogo, ibanezlogo, tagimalogo]

    return (
        <div className="section-container">
            <div className="section-title">
                <div className="section-line"></div>
                <h3>New Products</h3>
                <div className="section-line"></div>
            </div>
            <div className="section-layer">
                {instruments.map((instrument, index) => (
                    <div key={index} className="section-layer-cards">
                        <img src={logos[index]} height={50} style={{ objectFit: 'contain' }} alt={`${instrument} Logo`} />
                        <img src={fenderguitar1} height={70} style={{ objectFit: 'contain' }} alt={`${instrument}`} />
                        <h2>{instrument}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cards;
