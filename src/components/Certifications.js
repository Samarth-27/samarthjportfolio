import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Certifications.css';

const Certifications = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const certs = [
    { title: 'Google Cloud Engineering', issuer: 'Google Cloud' },
    { title: 'Prompt Engineering & OpenAI', issuer: 'Columbia University' },
    { title: 'JECRC HackQuest 8.0', issuer: 'Runner-Up, JECRC University' },
    { title: 'Smart India Hackathon 2025', issuer: 'Runner-Up (Prelims)' },
    { title: 'Global Rank 14,311 on Unstop', issuer: '82,296 Points & 40+ Certificates' }
  ];

  return (
    <section id="certifications" className="certifications-section" ref={ref}>
      <div className="container">
        <motion.h2 className="section-title"
          style={{ fontSize: '24px', fontWeight: '500', marginBottom: '40px' }}
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          Achievements
        </motion.h2>
        
        <div className="certs-grid">
          {certs.map((cert, index) => (
            <motion.div key={index} className="cert-box" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: index * 0.1 }}>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-desc">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;