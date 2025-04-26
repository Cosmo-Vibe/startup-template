import React from 'react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form handling logic would go here
  };

  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.sectionTitle}>CONTACT</h2>
      <p className={styles.sectionSubtitle}>Lets get in touch. Send us a message:</p>
      
      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <p>
            <i className="fas fa-map-marker-alt"></i> Chicago, US
          </p>
          <p>
            <i className="fas fa-phone"></i> Phone: +00 151515
          </p>
          <p>
            <i className="fas fa-envelope"></i> Email: mail@mail.com
          </p>
        </div>
        
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Name" 
            name="name" 
            required 
            className={styles.formInput}
          />
          <input 
            type="email" 
            placeholder="Email" 
            name="email" 
            required 
            className={styles.formInput}
          />
          <input 
            type="text" 
            placeholder="Subject" 
            name="subject" 
            required 
            className={styles.formInput}
          />
          <textarea 
            placeholder="Message" 
            name="message" 
            required 
            className={styles.formTextarea}
          ></textarea>
          <button type="submit" className={styles.submitButton}>
            <i className="fas fa-paper-plane mr-2"></i> SEND MESSAGE
          </button>
        </form>
      </div>
      
      <div className={styles.mapContainer}>
        <img src="/img/map.jpg" alt="Map" className={styles.map} />
      </div>
    </section>
  );
};

export default Contact;
