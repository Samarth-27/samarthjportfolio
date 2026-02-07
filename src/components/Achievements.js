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