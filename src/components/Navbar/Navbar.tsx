import React from 'react';
import styles from './Navbar.module.css';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <a href="#home" className={styles.logo}>LOGO</a>
        
        {/* Desktop navbar */}
        <div className={styles.navLinks}>
          <a href="#about" className={styles.navItem}>ABOUT</a>
          <a href="#team" className={styles.navItem}>
            <i className="fas fa-user mr-2"></i> TEAM
          </a>
          <a href="#work" className={styles.navItem}>
            <i className="fas fa-th mr-2"></i> WORK
          </a>
          <a href="#pricing" className={styles.navItem}>
            <i className="fas fa-dollar-sign mr-2"></i> PRICING
          </a>
          <a href="#contact" className={styles.navItem}>
            <i className="fas fa-envelope mr-2"></i> CONTACT
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleSidebar}
          className={styles.menuButton}
          aria-label="Open menu"
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
