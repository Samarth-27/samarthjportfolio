import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = (window.scrollY / documentHeight) * 100;
      setScrollProgress(scrolled);

      // Detect active section
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'certifications', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="scroll-progress"
        style={{ 
          scaleX: scrollProgress / 100,
          transformOrigin: '0%'
        }}
      />

      {/* Particle Background */}
      <ParticleBackground />

      {/* Navigation */}
      <Navigation activeSection={activeSection} />

      {/* Sections */}
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Achievements />
      <Contact />

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2026 Samarth Jain. Crafted with React & Framer Motion</p>
          <div className="footer-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/samarjai8685" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://unstop.com/u/samarjai8685" target="_blank" rel="noopener noreferrer">Unstop</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
