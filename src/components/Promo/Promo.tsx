import React from 'react';
import styles from './Promo.module.css';

const Promo: React.FC = () => {
  return (
    <div className={styles.promo}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h3 className={styles.title}>We know design.</h3>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore.
          </p>
          <p>
            <a href="#work" className={styles.button}>
              <i className="fas fa-th"></i> View Our Works
            </a>
          </p>
        </div>
        
        <div className={styles.imageContent}>
          <img 
            className={styles.image} 
            src="/img/phone_buildings.jpg" 
            alt="Buildings" 
          />
        </div>
      </div>
    </div>
  );
};

export default Promo;
