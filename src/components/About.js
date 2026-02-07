
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { number: 'Top 5%', label: 'Academic Ranking'},
    { number: '14,311', label: 'Global Rank on Unstop'},
    { number: '40+', label: 'Certificates'},
    { number: '81K+', label: 'Unstop Points'}
  ];

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text-container"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-card">
              <div className="about-icon">💫</div>
              <h3>The Journey</h3>
              <p>
                Motivated and detail-oriented B.Tech Computer Science student (2023-2027) with a passion for 
                building innovative solutions. I specialize in JavaScript, Web Development, Java, Python, and 
                Data Structures & Algorithms.
              </p>
              <p className="mt-2">
                Currently pursuing my Bachelor of Engineering at JECRC University, Jaipur, where I'm among the 
                top 5% of my batch. I love creating AI-powered solutions and have a strong foundation in 
                full-stack development.
              </p>
              <div className="about-highlight">
                <span className="highlight-dot"></span>
                <span>Seeking internship opportunities to apply my skills and contribute to innovative projects</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-stats-grid"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-box"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-glow"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;