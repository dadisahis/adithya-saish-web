import React from 'react';
import { motion } from 'framer-motion';

function AboutPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ padding: '100px 20px', color: 'white', textAlign: 'center' }}
        >
            <h1>About Me</h1>
            <p>This is the About Page. Content coming soon.</p>
        </motion.div>
    );
}

export default AboutPage;
