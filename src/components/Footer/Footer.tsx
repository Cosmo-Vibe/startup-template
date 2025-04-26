import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <a href="#home" className={styles.topButton}>
        <i className="fas fa-arrow-up mr-2"></i>To the top
      </a>
      
      <div className={styles.socialIcons}>
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-snapchat"></i>
        <i className="fab fa-pinterest-p"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-linkedin-in"></i>
      </div>
      
      <p className={styles.copyright}>
        Powered by <a href="#" className={styles.creditLink}>Your Company</a>
      </p>
    </footer>
  );
};

export default Footer;
