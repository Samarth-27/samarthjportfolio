import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, ArrowUpRight } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      title: 'AI Hiring Assistant',
      subtitle: 'AI Recruitment System',
      description: 'Streamlit & LangChain-powered recruitment platform evaluating resumes against job descriptions with explainable AI feedback.',
      image: process.env.PUBLIC_URL + '/projects/candidate_portal_1.png',
      year: '2026',
      demoLink: 'https://ai-hiring-assistant01.streamlit.app/',
      domain: 'ai-hiring-assistant.streamlit.app',
      tags: ['LangChain', 'OpenAI', 'Streamlit', 'Python']
    },
    {
      title: 'StayTrack',
      subtitle: 'Hostel Management',
      description: 'Full-stack hostel and property management system streamlining student allocations, attendance, and fee tracking.',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=80',
      year: '2026',
      demoLink: 'https://staytrack-nine.vercel.app/',
      domain: 'staytrack-nine.vercel.app',
      tags: ['React', 'Node.js', 'MongoDB', 'Express']
    },
    {
      title: 'AgroLedger',
      subtitle: 'Web Application',
      description: 'Decentralized agricultural trading and monitoring dashboard providing transparent crop arrivals, deals, and auctions.',
      image: process.env.PUBLIC_URL + '/projects/AgroLedger.png',
      year: '2026',
      demoLink: 'https://agro-ledger-client.vercel.app',
      domain: 'agro-ledger-client.vercel.app',
      tags: ['React', 'Web App', 'Analytics', 'APIs']
    },
    {
      title: 'EVOLVE-X',
      subtitle: 'AI Internship Allocations',
      description: 'Multi-AI engine designed for the PM Internship Scheme to automate candidate-role allocations with high accuracy.',
      image: process.env.PUBLIC_URL + '/projects/evolve-x.png',
      year: '2026',
      demoLink: 'https://evolve-x-sams-projects-1b56e3de.vercel.app/',
      domain: 'evolve-x.vercel.app',
      tags: ['AI Engine', 'React', 'FastAPI', 'GovTech']
    }
  ];

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          style={{ fontSize: '24px', fontWeight: '500', marginBottom: '36px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Recent Projects
        </motion.h2>

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-slider-box"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Browser Window Mockup Frame */}
              <div className="project-mockup">
                <div className="mockup-header">
                  <div className="mockup-dots">
                    <span className="mockup-dot red"></span>
                    <span className="mockup-dot yellow"></span>
                    <span className="mockup-dot green"></span>
                  </div>
                  <div className="mockup-url">
                    <Globe size={11} className="mockup-globe-icon" />
                    <span>{project.domain}</span>
                  </div>
                  <span className="badge-year">{project.year}</span>
                </div>

                <div className="project-img">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Project Card Content */}
              <div className="project-content">
                <div className="project-header-row">
                  <div>
                    <h3>{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                  </div>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-icon-btn"
                    aria-label={`Open demo for ${project.title}`}
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>

                {project.tags && (
                  <div className="project-tags">
                    {project.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
