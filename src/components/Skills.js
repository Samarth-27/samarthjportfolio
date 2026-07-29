import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    { title: 'Web Development', desc: 'React, Node.js, Express, MongoDB' },
    { title: 'Machine Learning', desc: 'Python, Generative AI, Data Science' },
    { title: 'Software Engineering', desc: 'Automation, APIs, Cloud Deployments' }
  ];

  const stack = [
    {
      category: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'SQL']
    },
    {
      category: 'AI & Data',
      skills: ['Python', 'Generative AI', 'LangChain', 'RAG']
    },
    {
      category: 'Tools',
      skills: ['Git', 'GitHub', 'Docker']
    }
  ];

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <div className="skills-inner">
        <div className="skills-grid">
          {/* Services Column */}
          <div className="services-col">
            <motion.h3 className="sub-title"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}>
              Services
            </motion.h3>
            <div className="services-list">
              {services.map((svc, idx) => (
                <motion.div 
                  key={idx} 
                  className="service-box"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * idx }}>
                  <h4>{svc.title}</h4>
                  <p>{svc.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stack Column */}
          <div className="stack-col">
            <motion.h3 className="sub-title"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}>
              Tech Stack
            </motion.h3>
            <div className="stack-groups">
              {stack.map((group, idx) => (
                <motion.div 
                  key={idx} 
                  className="stack-group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * idx }}>
                  <h4 className="stack-category-title">{group.category}</h4>
                  <div className="stack-list">
                    {group.skills.map((item, sIdx) => (
                      <span key={sIdx} className="stack-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;