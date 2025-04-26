import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <header id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          <span className={styles.largeTitle}>Start something that matters</span>
          <span className={styles.smallTitle}>Start something that matters</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Stop wasting valuable time with projects that just isn't you.
        </p>
        <p>
          <a href="#about" className={styles.heroButton}>
            Learn more and start today
          </a>
        </p>
      </div>
      
      <div className={styles.socialIcons}>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-snapchat"></i>
        <i className="fab fa-pinterest-p"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-linkedin-in"></i>
      </div>
    </header>
  );
};

export default Hero;
