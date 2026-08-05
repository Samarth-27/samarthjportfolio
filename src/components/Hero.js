import React from 'react';
import { motion } from 'framer-motion';
import { Download, Calendar, Briefcase, Code2, BrainCircuit } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const stats = [
    { icon: <Calendar size={24} />, num: "2+", label: "Months Industry Experience" },
    { icon: <Briefcase size={24} />, num: "10+", label: "Projects Built" },
    { icon: <Code2 size={24} />, num: "150+", label: "LeetCode Problems" },
    { icon: <BrainCircuit size={24} />, num: "AI", label: "GenAI & ML Focus" },
  ];

  const scrollToSection = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 20, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-area">
      <div className="custom-container">
        
        {/* Top Action Bar */}
        <motion.div 
          className="hero-action-bar"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="status-card">
            <span className="online-dot pulsing"></span>
            Open to Opportunities
          </div>
          <a 
            href={`${process.env.PUBLIC_URL}/Samarth_Jain_Resume.pdf`} 
            download="Samarth_Jain_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="resume-card"
          >
            Download Resume <Download size={18} />
          </a>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          className="hero-main-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="hero-subtitle" variants={itemVariants}>
            HELLO, I'M
          </motion.span>
          
          <motion.h1 variants={itemVariants}>
            Samarth Jain.<br />
            <span className="highlight">AI Engineer</span> &<br />
            Full-Stack Developer.
          </motion.h1>
          
          <motion.p className="hero-description" variants={itemVariants}>
            I build robust, scalable full-stack web applications and integrate Machine Learning and AI into practical solutions.
          </motion.p>

          {/* Call To Action Buttons */}
          <motion.div className="hero-cta" variants={itemVariants}>
            <a href="#projects" onClick={(e) => scrollToSection('projects', e)} className="theme-btn">View Projects</a>
            <a href="#contact" onClick={(e) => scrollToSection('contact', e)} className="theme-btn">Contact Me</a>
          </motion.div>

          {/* Quick Stats Grid */}
          <motion.div className="quick-stats-grid" variants={itemVariants}>
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-info">
                  <h3>{stat.num}</h3>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
          
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
