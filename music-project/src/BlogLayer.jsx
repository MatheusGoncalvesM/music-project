import { React, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './index.css';

function BlogLayer(){

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true});

    return(
            <div ref={ref} style={{width: '100%', height: 'auto', minHeight: '50vh', display: 'flex',
                justifyContent: 'space-evenly', alignItems: 'center' }}>
                {[1, 2, 3].map((circle,index) => (
                    <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? {opacity: 1, scale: 3} : {}}
                    transition={{ delay: index * 0.3, duration: 0.5 }}
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: '50%',
                        backgroundColor: 'black',
                        margin: '0 20px',
                    }}
                    />
                ))}
            </div>
    );
}

export default BlogLayer