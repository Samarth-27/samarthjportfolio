import React from 'react';
import './Navigation.css';
import { Mail } from 'lucide-react';

const Navigation = ({ activeSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 20,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="sticky-sidebar">
      <div className="sticky-sidebar-inner">
        <div className="sidebar-top">
          <div className="sidebar-logo">
            <span className="logo-text">SJ</span>
          </div>

          <div className="sidebar-me">
            <div className="sidebar-me-inner">
              <div className="img-box">
                <img src="/Profile/WhatsApp Image 2026-05-19 at 8.16.03 PM.jpeg" alt="Samarth Jain" />
              </div>
              <div className="content">
                <h3>Samarth Jain</h3>
                <p>AI Engineer</p>
                <p>Full-Stack Developer</p>
              </div>
            </div>
          </div>

          <div className="menu-lists">
            <ul>
              {navItems.map((item) => (
                <li key={item.id} className={activeSection === item.id ? 'active-menu' : ''}>
                  <a href={`#${item.id}`} onClick={(e) => scrollToSection(item.id, e)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="sidebar-bottom">
          <div className="social-link-wrap">
            <ul className="social-links">
              <li><a href="https://github.com/Samarth-27" target="_blank" rel="noopener noreferrer"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
              <li><a href="https://linkedin.com/in/samarjai8685" target="_blank" rel="noopener noreferrer"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a></li>
              <li><a href="mailto:samarthjain.cse@gmail.com" target="_blank" rel="noopener noreferrer"><Mail size={18} /></a></li>
            </ul>
          </div>
          <p className="copyright-text">
            Designed & Developed by<br />
            Samarth Jain © 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
