import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const experienceData = [
    {
      date: 'May 2026 – Present',
      title: 'Data Science / GenAI Intern',
      subtitle: 'Celebal Technologies'
    },
    {
      date: '2025',
      title: 'Smart India Hackathon',
      subtitle: 'Runner-Up (Prelims)'
    },
    {
      date: '2025',
      title: 'Global Rank 14,311',
      subtitle: 'Unstop (82K+ Points)'
    }
  ];

  const educationData = [
    {
      date: '2023 – 2027',
      title: 'Bachelor of Engineering (CSE)',
      subtitle: 'JECRC University, Jaipur'
    },
    {
      date: 'October 2025',
      title: 'Google Cloud Engineering',
      subtitle: 'Google Cloud (Certificate)'
    },
    {
      date: 'August 2025',
      title: 'Prompt Engineering & OpenAI',
      subtitle: 'Columbia University'
    }
  ];

  const renderTimeline = (title, data) => (
    <div className="timeline-column">
      <h3 className="timeline-header">{title}</h3>
      <div className="edc-and-exp-lists">
        {data.map((item, index) => (
          <motion.div 
            key={index} 
            className="edc-and-exp-box"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="meta-content">
              <span className="date">{item.date}</span>
              <h4 className="title">{item.title}</h4>
              <p className="subtitle">{item.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="experience" className="experience-section" ref={ref}>
      <div className="experience-inner">
        <div className="edc-and-exp-inner">
          {renderTimeline('Experience & Awards', experienceData)}
          {renderTimeline('Education & Certifications', educationData)}
        </div>
      </div>
    </section>
  );
};

export default Experience;
