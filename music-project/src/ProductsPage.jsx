import React, { useRef } from 'react';
import ProductsHero from './ProductsHero.jsx';
import ProductsGrid from './ProductsGrid.jsx';
import { motion, useInView } from 'framer-motion';
import './index.css';

function ProductsPage(){
    return (
        <>
            <ProductsHero/>
            <ProductsGrid/>
        </>
    )
}

export default ProductsPage