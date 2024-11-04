import { React, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './index.css';

function BlogLayer(){
    return(
        <div className="blog-layer-container">
            <motion.div
                className="square"
                animate={{ x: 200 }}
                transition={{ ease: "easeOut", duration: 1 }}
            ></motion.div>
        </div>
    )
}

export default BlogLayer