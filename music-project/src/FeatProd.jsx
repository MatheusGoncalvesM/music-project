import React from  'react';
import './index.css'
import headsetimage from './assets/headsetimage.png'
import ratingstars from './assets/ratingstars.png'

function FeatProd(){
    return(
        <div className="feat-prod-container">
            <img src={headsetimage} height={600} style={{ objectFit: 'contain' }}></img>
            <div className="feat-prod-box">
                <div className="feat-prod-box-info">
                    <h1>TITLE</h1>
                    <h2>SUB-TITLE</h2>
                    <p>There are many variations of passages of lorem Ipsum available,
                    but the majority have suffered alterations in some form, by injected humour, 
                    or randomised words which don't look even slighty believable.</p>
                    <img src={ratingstars} height={50} style={{ objectFit: 'contain' }}></img>
                </div>
            </div>
        </div>
    )
}

export default FeatProd