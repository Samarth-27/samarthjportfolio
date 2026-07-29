import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="about-inner">
        <motion.h2 className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div className="about-text"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <p>
              I am a Computer Science undergraduate from Jaipur, India, passionate about building AI-powered and full-stack applications that solve real-world problems. I successfully completed a 2-month Generative AI & Data Science Internship at Celebal Technologies, where I worked on AI workflows, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and modern data science solutions.
            </p>
            <p>
              My technical expertise includes Python, React.js, Node.js, Express.js, MongoDB, Machine Learning, and Generative AI. I have built intelligent full-stack applications, including AI-powered management systems and enterprise dashboards, with a focus on creating scalable, user-centric software. I am always eager to learn emerging technologies and transform innovative ideas into practical products.
            </p>
          </motion.div>

          <motion.div className="about-details"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}>
            <ul>
              <li>
                <span className="label">Name</span>
                <span className="value">Samarth Jain</span>
              </li>
              <li>
                <span className="label">Location</span>
                <span className="value">Jaipur, India</span>
              </li>
              <li>
                <span className="label">Email</span>
                <span className="value">samarthjain.cse@gmail.com</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;