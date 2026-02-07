# All Remaining Components - Copy & Paste Ready

## Projects Component

### src/components/Projects.js
```javascript
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      title: 'EVOLVE-X',
      subtitle: 'AI Internship Allocations',
      icon: '🤖',
      description: 'AI-powered platform matching students with internships under PM Internship Scheme using NLP and ML algorithms.',
      techStack: ['React', 'JavaScript', 'NLP', 'ML', 'Chart.js'],
      features: ['94.7% match accuracy', '100% quota compliance', 'Explainable AI', '6 AI modules'],
      gradient: 'var(--gradient-1)'
    },
    {
      title: 'POWER-PULSE',
      subtitle: 'Procurement Platform',
      icon: '⚡',
      description: 'Intelligent procurement management system with AI-driven demand forecasting for power transmission industry.',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Chart.js', 'ML'],
      features: ['94.2% forecast accuracy', '6 role dashboards', 'Real-time inventory', 'Analytics'],
      gradient: 'var(--gradient-2)'
    },
    {
      title: 'TASKMASTER PRO',
      subtitle: 'Advanced Todo App',
      icon: '✅',
      description: 'Productivity app with drag-drop Kanban, XP system, and time tracking.',
      techStack: ['React 18', 'Context API', 'Framer Motion', 'LocalStorage'],
      features: ['4 views', 'Gamification', 'Pomodoro timer', '6 themes'],
      gradient: 'var(--gradient-3)'
    }
  ];

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className="container">
        <motion.h2 className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          Featured Projects
        </motion.h2>

        <p className="section-subtitle">
          Building innovative solutions with AI and modern web technologies
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}>
              
              <div className="project-icon-wrapper">
                <span className="project-icon">{project.icon}</span>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  <span className="tech-label">Tech Stack</span>
                  <div className="tech-stack">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-features">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="feature">
                      <span className="feature-check">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="project-glow" style={{ background: project.gradient }}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
```

### src/components/Projects.css
```css
.projects-section {
  background: var(--dark);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2.5rem;
  max-width: 1400px;
  margin: 0 auto;
}

.project-card {
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
  transition: all 0.4s ease;
}

.project-card:hover {
  border-color: rgba(102, 126, 234, 0.3);
  box-shadow: 0 25px 70px rgba(102, 126, 234, 0.2);
}

.project-icon-wrapper {
  padding: 2rem 2rem 0;
  text-align: center;
}

.project-icon {
  font-size: 4rem;
  display: inline-block;
  animation: float 3s ease-in-out infinite;
}

.project-content {
  padding: 2rem;
}

.project-header h3 {
  font-size: 2rem;
  background: var(--gradient-main);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
}

.project-subtitle {
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.project-description {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 2rem;
}

.project-tech {
  margin-bottom: 2rem;
}

.tech-label {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 1rem;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.tech-badge {
  padding: 0.5rem 1rem;
  background: rgba(255, 0, 255, 0.15);
  border: 1px solid rgba(255, 0, 255, 0.25);
  border-radius: 50px;
  font-size: 0.85rem;
  color: #f093fb;
}

.project-features {
  display: grid;
  gap: 0.8rem;
}

.feature {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.feature-check {
  color: var(--secondary);
  font-weight: bold;
  font-size: 1.1rem;
}

.project-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  opacity: 0;
  border-radius: 50%;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.project-card:hover .project-glow {
  opacity: 0.1;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
```

## Certifications Component

### src/components/Certifications.js
```javascript
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Certifications.css';

const Certifications = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const certifications = [
    {
      title: 'Google Cloud Engineering',
      issuer: 'Google Cloud',
      date: 'October 2025',
      icon: '☁️',
      details: 'ACE-Endorsed (6 College Credits) - Cloud deployment, Compute Engine, GKE, VPC networking, DevOps, Vertex AI',
      color: '#4285F4'
    },
    {
      title: 'Prompt Engineering & OpenAI',
      issuer: 'Columbia University',
      date: 'August 2025',
      icon: '🤖',
      details: 'Built AI applications with OpenAI API, LangChain, LlamaIndex. Mastered prompt engineering techniques',
      color: '#00A67E'
    },
    {
      title: 'JECRC HackQuest 8.0',
      issuer: 'JECRC University',
      date: 'September 2025',
      icon: '🏆',
      details: 'Prize Winner - 36-hour hackathon. Developed innovative technical solution',
      color: '#FF6B6B'
    }
  ];

  return (
    <section id="certifications" className="certifications-section" ref={ref}>
      <div className="container">
        <motion.h2 className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          Certifications
        </motion.h2>

        <p className="section-subtitle">
          Continuous learning and professional development
        </p>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="cert-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.03, y: -5 }}>
              
              <div className="cert-icon" style={{ background: `${cert.color}20` }}>
                <span>{cert.icon}</span>
              </div>

              <div className="cert-content">
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
                <p className="cert-details">{cert.details}</p>
              </div>

              <div className="cert-badge" style={{ borderColor: cert.color }}>
                <span style={{ color: cert.color }}>Verified</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
```

### src/components/Certifications.css
```css
.certifications-section {
  background: linear-gradient(180deg, var(--dark-secondary) 0%, var(--dark) 100%);
}

.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.cert-card {
  position: relative;
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.4s ease;
}

.cert-card:hover {
  border-color: rgba(102, 126, 234, 0.3);
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.15);
}

.cert-icon {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  margin-bottom: 1.5rem;
  animation: float 3s ease-in-out infinite;
}

.cert-content h3 {
  font-size: 1.6rem;
  margin-bottom: 0.8rem;
  background: var(--gradient-main);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cert-issuer {
  color: var(--text-secondary);
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.cert-date {
  color: var(--primary);
  font-weight: 600;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
}

.cert-details {
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 0.95rem;
}

.cert-badge {
  position: absolute;
  top: 2rem;
  right: 2rem;
  padding: 0.5rem 1rem;
  border: 2px solid;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
}

@media (max-width: 768px) {
  .certifications-grid {
    grid-template-columns: 1fr;
  }
}
```

## Achievements Component

### src/components/Achievements.js
```javascript
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Achievements.css';

const Achievements = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const achievements = [
    {
      title: 'Global Rank 14,311 on Unstop',
      icon: '🏆',
      description: 'Achieved impressive ranking with 81,136 points and 40 certificates on Unstop Live Leaderboard.',
      stats: ['81,136 Points', '40 Certificates', 'Global Ranking']
    },
    {
      title: 'Smart India Hackathon 2025',
      icon: '🥈',
      description: 'Qualified for prelims and secured Runner-Up position in one of India\'s largest hackathons.',
      stats: ['Runner-Up', 'National Level', 'Innovation Award']
    },
    {
      title: 'Top 5% Academic Performance',
      icon: '🎓',
      description: 'Consistently maintained position among top 5% at JECRC University.',
      stats: ['Top 5%', 'CS Engineering', 'Academic Excellence']
    }
  ];

  return (
    <section id="achievements" className="achievements-section" ref={ref}>
      <div className="container">
        <motion.h2 className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          Achievements
        </motion.h2>

        <p className="section-subtitle">
          Recognition and accomplishments throughout my journey
        </p>

        <div className="achievements-list">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="achievement-card"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ x: 10, scale: 1.02 }}>
              
              <div className="achievement-icon">{achievement.icon}</div>
              
              <div className="achievement-content">
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
                
                <div className="achievement-stats">
                  {achievement.stats.map((stat, idx) => (
                    <span key={idx} className="stat-pill">{stat}</span>
                  ))}
                </div>
              </div>

              <div className="achievement-number">0{index + 1}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
```

### src/components/Achievements.css
```css
.achievements-section {
  background: var(--dark);
}

.achievements-list {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.achievement-card {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-left: 4px solid var(--primary);
  transition: all 0.4s ease;
  overflow: hidden;
}

.achievement-card:hover {
  border-left-color: var(--secondary);
  box-shadow: 0 15px 50px rgba(102, 126, 234, 0.15);
}

.achievement-icon {
  font-size: 4rem;
  animation: float 3s ease-in-out infinite;
  flex-shrink: 0;
}

.achievement-content {
  flex: 1;
}

.achievement-content h3 {
  font-size: 1.8rem;
  background: var(--gradient-main);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.achievement-content p {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.achievement-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.stat-pill {
  padding: 0.5rem 1.2rem;
  background: rgba(102, 126, 234, 0.15);
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 50px;
  font-size: 0.9rem;
  color: var(--primary);
  font-weight: 500;
}

.achievement-number {
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  font-size: 4rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.03);
}

@media (max-width: 768px) {
  .achievement-card {
    flex-direction: column;
    text-align: center;
  }

  .achievement-icon {
    margin: 0 auto;
  }
}
```

## Contact Component

### src/components/Contact.js
```javascript
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'samarthjain.cse@gmail.com',
      link: 'mailto:samarthjain.cse@gmail.com',
      color: '#EA4335'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91-787-890-8050',
      link: 'tel:+917878908050',
      color: '#34A853'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://linkedin.com/in/samarjai8685',
      color: '#0A66C2'
    },
    {
      icon: '🏆',
      title: 'Unstop',
      value: 'View Profile',
      link: 'https://unstop.com/u/samarjai8685',
      color: '#FF6B6B'
    }
  ];

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className="container">
        <motion.h2 className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          Get In Touch
        </motion.h2>

        <motion.p className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}>
          Let's discuss new projects, creative ideas, or opportunities to collaborate
        </motion.p>

        <div className="contact-grid">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}>
              
              <div className="contact-icon" style={{ background: `${method.color}20` }}>
                <span>{method.icon}</span>
              </div>
              
              <h3>{method.title}</h3>
              <p>{method.value}</p>

              <div className="contact-arrow" style={{ color: method.color }}>→</div>
            </motion.a>
          ))}
        </div>

        <motion.div className="contact-cta"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}>
          <h3>Ready to start a project?</h3>
          <p>I'm always open to discussing internship opportunities and innovative projects</p>
          <a href="mailto:samarthjain.cse@gmail.com" className="btn btn-primary">
            Send a Message
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
```

### src/components/Contact.css
```css
.contact-section {
  background: linear-gradient(180deg, var(--dark-secondary) 0%, var(--dark) 100%);
  padding-bottom: 4rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 4rem;
}

.contact-card {
  position: relative;
  padding: 2.5rem 2rem;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  text-align: center;
  text-decoration: none;
  color: inherit;
  transition: all 0.4s ease;
  overflow: hidden;
}

.contact-card:hover {
  border-color: rgba(102, 126, 234, 0.3);
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.2);
}

.contact-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
}

.contact-card h3 {
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
  color: var(--text-primary);
}

.contact-card p {
  color: var(--text-secondary);
  font-size: 1rem;
}

.contact-arrow {
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  font-size: 2rem;
  font-weight: bold;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
}

.contact-card:hover .contact-arrow {
  opacity: 1;
  transform: translateX(0);
}

.contact-cta {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  padding: 3rem;
  background: rgba(102, 126, 234, 0.05);
  border-radius: 24px;
  border: 1px solid rgba(102, 126, 234, 0.15);
}

.contact-cta h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  background: var(--gradient-main);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.contact-cta p {
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## That's it! 🎉

You now have ALL the components. Just copy and paste them into your project!

### Quick Setup:
1. Create each file in `/src/components/`
2. Make sure all imports match
3. Run `npm start`
4. Enjoy your unique portfolio!
