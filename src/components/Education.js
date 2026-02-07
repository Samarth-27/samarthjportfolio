import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Education.css';

const Education = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const highlights = [
    'Among the top 5% of the batch',
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Web Development',
    'Database Management Systems'
  ];

  return (
    <section id="education" className="education-section" ref={ref}>
      <div className="container">
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          Education
        </motion.h2>

        <motion.div className="education-card" initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="education-header">
            <div className="education-icon">🎓</div>
            <div className="education-info">
              <h3>Bachelor of Engineering</h3>
              <p className="education-major">Computer Science and Engineering</p>
              <p className="education-university">JECRC University, Jaipur</p>
            </div>
            <div className="education-date">2023 – 2027</div>
          </div>

          <div className="education-highlights">
            <h4>Key Highlights & Coursework</h4>
            <div className="highlights-grid">
              {highlights.map((highlight, index) => (
                <motion.div key={index} className="highlight-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}>
                  <span className="highlight-icon">✦</span>
                  <span>{highlight}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
