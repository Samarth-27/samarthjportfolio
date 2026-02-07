import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: ['Java', 'Python', 'JavaScript'],
      color: 'var(--gradient-1)'
    },
    {
      title: 'Web Development',
      icon: '🌐',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      color: 'var(--gradient-2)'
    },
    {
      title: 'Data Structures & Algorithms',
      icon: '📊',
      skills: ['Arrays', 'Linked Lists', 'Stacks', 'Queues', 'Trees', 'Sorting', 'Searching'],
      color: 'var(--gradient-3)'
    },
    {
      title: 'Cloud & AI',
      icon: '☁️',
      skills: ['Google Cloud Platform', 'NLP', 'Machine Learning', 'OpenAI API', 'LangChain'],
      color: 'var(--gradient-4)'
    },
    {
      title: 'Tools & Technologies',
      icon: '🛠️',
      skills: ['Chart.js', 'Context API', 'Framer Motion', 'LocalStorage'],
      color: 'var(--gradient-1)'
    },
    {
      title: 'Other Skills',
      icon: '⚡',
      skills: ['Problem Solving', 'Debugging', 'SDLC'],
      color: 'var(--gradient-2)'
    }
  ];

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <div className="container">
        <motion.h2 className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          Technical Skills
        </motion.h2>

        <p className="section-subtitle">
          Technologies and tools I work with to bring ideas to life
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}>
              
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>

              <div className="skills-tags">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    className="skill-tag"
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ type: 'spring', stiffness: 400 }}>
                    {skill}
                  </motion.span>
                ))}
              </div>

              <div className="category-glow" style={{ background: category.color, opacity: 0.1 }}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;