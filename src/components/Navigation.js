import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Navigation.css';

const Navigation = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'projects', label: 'Projects', icon: '💼' },
    { id: 'certifications', label: 'Certs', icon: '📜' },
    { id: 'achievements', label: 'Wins', icon: '🏆' },
    { id: 'contact', label: 'Contact', icon: '📬' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.nav 
        className="navigation"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="nav-container">
          <motion.div 
            className="nav-logo"
            whileHover={{ scale: 1.1, rotate: 5 }}
            onClick={() => scrollToSection('home')}
          >
            <span className="logo-text">SJ</span>
            <div className="logo-orbit"></div>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="nav-links">
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                  {activeSection === item.id && (
                    <motion.div
                      className="active-indicator"
                      layoutId="activeIndicator"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className={`menu-toggle ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className={`mobile-menu ${isOpen ? 'open' : ''}`}
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'spring', damping: 20 }}
      >
        <ul className="mobile-nav-links">
          {navItems.map((item) => (
            <motion.li
              key={item.id}
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </button>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="mobile-menu-overlay" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;
