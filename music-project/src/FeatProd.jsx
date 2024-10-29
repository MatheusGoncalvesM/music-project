import React from  'react';
import './index.css'
import headsetimage from './assets/headsetimage.png'
import ratingstars from './assets/ratingstars.png'


function FeatProd(){
    return(
        <div className="feat-prod-container">
            <img 
                src={headsetimage} 
                height={600} 
                style={{ objectFit: 'contain', position: 'relative', left: '200px' }} alt="Headset"
            />
            <div className="feat-prod-box">
                <div className="feat-prod-box-info">
                    <h1>BEST SELLER</h1>
                    <h2>HDR - F 140</h2>
                    <p>There are many variations of passages of lorem Ipsum available,
                    but the majority have suffered alterations in some form, by injected humour, 
                    or randomised words which don't look even slighty believable.</p>
                    <img src={ratingstars} height={25} style={{ objectFit: 'contain', marginBottom: '10px' }} alt="Rating Stars" />
                    <h3><span className="original-price">$41</span> $31</h3>
                    <div className="feat-prod-box-info-button-area">
                        <button className="button-81">Add to Card</button>
                        <button className="button-81">More Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeatProd