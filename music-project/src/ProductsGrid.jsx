import './index.css';
import React from 'react';


function ProductsGrid() {
    return(
        <>
        <div className="section-container" style={{ padding: '20px' }}>
            <div className="products-grid">
                <div className="products-container"></div>
                <div className="products-container"></div>
                <div className="products-container"></div>
                <div className="products-container"></div>
            </div>
        </div>
        <div className="section-container" style={{ padding: '20px' }}>
            <div className="products-grid">
                <div className="products-container"></div>
                <div className="products-container"></div>
                <div className="products-container"></div>
                <div className="products-container"></div>
            </div>
        </div>
        <div className="section-container" style={{ padding: '20px' }}>
            <div className="products-grid">
                <div className="products-container"></div>
                <div className="products-container"></div>
                <div className="products-container"></div>
                <div className="products-container"></div>
            </div>
        </div>
    </>
    )
}

export default ProductsGrid