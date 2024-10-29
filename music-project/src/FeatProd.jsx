import React from  'react';
import './index.css'
import headsetimage from './assets/headsetimage.png'
import ratingstars from './assets/ratingstars.png'

function FeatProd(){
    return(
        <div className="feat-prod-container">
            <img src={headsetimage} height={600} style={{ objectFit: 'contain', position: 'relative', left: '200px' }}></img>
            <div className="feat-prod-box">
                <div className="feat-prod-box-info">
                    <h1>TITLE</h1>
                    <h2>SUB-TITLE</h2>
                    <p>There are many variations of passages of lorem Ipsum available,
                    but the majority have suffered alterations in some form, by injected humour, 
                    or randomised words which don't look even slighty believable.</p>
                    <img src={ratingstars} height={50} style={{ objectFit: 'contain', position: 'relative', right: '0.8vw' }}></img>
                    <h3>$41</h3>
                    <div className="feat-prod-box-info-button-area">
                        <button className="button-81">Add to Card</button>
                        <button className="button-81">More Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatProd