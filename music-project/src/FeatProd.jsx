import React, { useState } from  'react';
import './index.css'
import headsetimage from './assets/headsetimage.png'
import ratingstars from './assets/ratingstars.png'

const originalPrice = "$41"

const discountPrice = "$31"

const description = "There are many variations of passages of lorem Ipsum available, but the majority have suffered alterations in some form, by injected humour, or randomised words which don't look even slighty believable."

const title1 = "BEST SELLER"

const title2 = "HDR - F 140"

function nextButton(){
    return(
        <button className="next-button">

        </button>
    )
}

function FeatProd(){
    return(
        <>
            <div className="hero-container-title" style={{ alignItems: 'center', paddingBottom: '0px', paddingTop: '25px' }}>
                        <h1 style={{ fontSize: '2.3em', color: 'white',  fontWeight: 'bold' }}>FEATURED PRODUCTS</h1>  
            </div>
            <div className="feat-prod-container">
                <img 
                    src={headsetimage} 
                    height={600} 
                    style={{ objectFit: 'contain', position: 'relative', left: '300px' }} alt="Headset"
                />
                <div className="feat-prod-box">
                    <div className="feat-prod-box-info">
                        <h1>{title1}</h1>
                        <h2>{title2}</h2>
                        <p>{description}</p>
                        <img src={ratingstars} height={25} style={{ objectFit: 'contain', marginBottom: '10px' }} alt="Rating Stars" />
                        <h3><span className="original-price">{originalPrice}</span> {discountPrice}</h3>
                        <div className="feat-prod-box-info-button-area">
                            <button className="button-81">Add to Card</button>
                            <button className="button-81">More Details</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default FeatProd