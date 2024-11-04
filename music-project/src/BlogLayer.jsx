import { React, useRef } from 'react';
import { delay, motion, useInView } from 'framer-motion';
import './index.css';

function BlogLayer(){

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true});

    return(
        <>
            <div ref={ref} className="blog-layer-container">
                {[1].map((line, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0}}
                        animate={ isInView ? {opacity: 1, scale: 1}: {}}
                        transtition={{ delay: index * 0.3, duation: 0.5 }}
                        style={{
                            width: '5px',
                            height: '100vh',
                            
                        }}
                    />
                ))}
            </div>
        </>
    );
}

export default BlogLayer