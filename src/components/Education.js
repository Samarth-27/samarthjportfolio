import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="education" className="education-section" ref={ref}>
      <div className="container">
        <motion.h2 className="section-title text-left" initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          Education
        </motion.h2>

        <div className="stag-list-container">
          <motion.div className="stag-list-item" initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <h3 className="stag-item-title">Bachelor of Engineering in Computer Science</h3>
            <p className="stag-item-desc">JECRC University, Jaipur (2023 – 2027)</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
