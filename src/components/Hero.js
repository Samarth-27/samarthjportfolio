import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Hero.css';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="home" className="hero" ref={ref}>
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          

          {/* Name with Glitch Effect */}
          <motion.h1 variants={itemVariants} className="hero-name">
            <span className="name-text" data-text="Samarth Jain">
              Samarth Jain
            </span>
          </motion.h1>

          {/* Animated Title */}
          <motion.div variants={itemVariants} className="hero-title">
            <span className="title-highlight">CS Student</span>
            <span className="title-separator">×</span>
            <span className="title-highlight">Developer</span>
            <span className="title-separator">×</span>
            <span className="title-highlight">AI Enthusiast</span>
          </motion.div>

          {/* Description */}
          <motion.p variants={itemVariants} className="hero-description">
            Crafting innovative solutions with AI & Full-Stack Development.
            <br />
            Currently building the future, one line of code at a time.
          </motion.p>

          {/* Contact Info Pills */}
          <motion.div variants={itemVariants} className="hero-contact-pills">
            <motion.a 
              href="tel:+917878908050"
              className="contact-pill"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="pill-icon">📱</span>
              <span>+91-787-890-8050</span>
            </motion.a>
            <motion.a 
              href="mailto:samarthjain.cse@gmail.com"
              className="contact-pill"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="pill-icon">✉️</span>
              <span>samarthjain.cse@gmail.com</span>
            </motion.a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="hero-cta">
            <motion.button
              className="btn btn-primary hero-btn"
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
              <span className="btn-arrow">→</span>
            </motion.button>
            <motion.a
              href="#projects"
              className="btn btn-outline hero-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Work
              <span className="btn-arrow">↓</span>
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <div className="scroll-mouse">
              <div className="scroll-wheel"></div>
            </div>
            <p>Scroll to explore</p>
          </motion.div>
        </motion.div>

        {/* Animated 3D Element */}
        <motion.div
          className="hero-3d-element"
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <div className="cube">
            <div className="cube-face front">💻</div>
            <div className="cube-face back">🚀</div>
            <div className="cube-face right">⚡</div>
            <div className="cube-face left">🎯</div>
            <div className="cube-face top">🌟</div>
            <div className="cube-face bottom">✨</div>
          </div>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          className="floating-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.div 
            className="stat-card"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <div className="stat-value">Top 5%</div>
            <div className="stat-label">Academic Rank</div>
          </motion.div>
          <motion.div 
            className="stat-card"
            whileHover={{ scale: 1.1, rotate: -5 }}
          >
            <div className="stat-value">40+</div>
            <div className="stat-label">Certificates</div>
          </motion.div>
          <motion.div 
            className="stat-card"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <div className="stat-value">81K+</div>
            <div className="stat-label">Unstop Points</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
