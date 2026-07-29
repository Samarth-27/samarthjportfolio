import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className="contact-inner">
        <motion.h2 className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          Let's Work Together
        </motion.h2>

        <div className="contact-grid">
          
          {/* Contact Details */}
          <motion.div className="contact-info-blocks"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="info-box">
              <h4>Location</h4>
              <p>Jaipur, Rajasthan, India</p>
            </div>
            <div className="info-box">
              <h4>Contact Info</h4>
              <p><a href="tel:+917878908050">+91-787-890-8050</a></p>
              <p><a href="mailto:samarthjain.cse@gmail.com">samarthjain.cse@gmail.com</a></p>
            </div>
            <div className="info-box">
              <h4>Socials</h4>
              <div className="social-links-block">
                <a href="https://linkedin.com/in/samarth-jain-a8643928a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/Samarth-27" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://unstop.com/u/samarjai8685" target="_blank" rel="noopener noreferrer">Unstop</a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="contact-form-block"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}>
            <form action="https://formsubmit.co/samarthjain.cse@gmail.com" method="POST" className="stag-form">
              <input type="hidden" name="_subject" value="New Contact Message from Portfolio!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" placeholder="Write your message..." rows="4" required></textarea>
              </div>
              <button type="submit" className="theme-btn submit-btn">
                Send Message <span className="arrow-icon">→</span>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;