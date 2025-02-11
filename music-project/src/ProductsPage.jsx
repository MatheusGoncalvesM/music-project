import React, { useRef } from 'react';
import ProductsHero from './ProductsHero.jsx';
import { motion, useInView } from 'framer-motion';
import './index.css';

function ProductsPage(){
    return (
        <ProductsHero/>
    )
}

export default ProductsPage