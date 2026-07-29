import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      title: 'StayTrack',
      subtitle: 'Hostel Management',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80',
      year: '2026',
      demoLink: 'https://staytrack-nine.vercel.app/'
    },
    {
      title: 'AgroLedger',
      subtitle: 'Web Application',
      image: process.env.PUBLIC_URL + '/projects/AgroLedger.png',
      year: '2026',
      demoLink: 'https://agro-ledger-client.vercel.app'
    },
    {
      title: 'EVOLVE-X',
      subtitle: 'AI Internship Allocations',
      image: process.env.PUBLIC_URL + '/projects/evolve-x.png',
      year: '2026',
      demoLink: 'https://evolve-x-sams-projects-1b56e3de.vercel.app/'
    },
    {
      title: 'RAG Document QA',
      subtitle: 'AI Chatbot',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=400&q=80',
      year: '2026',
      demoLink: 'https://github.com/Samarth-27/RAG_Document_Question_Answering'
    }
  ];
  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className="container">
        <motion.h2 className="section-title"
          style={{ fontSize: '24px', fontWeight: '500', marginBottom: '40px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          Recent Projects
        </motion.h2>

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-slider-box"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}>

              <div className="project-img">
                <img src={project.image} alt={project.title} />
                <span className="badge-year">{project.year}</span>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="theme-icon-btn">
                  <span className="arrow-icon">↗</span>
                </a>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;