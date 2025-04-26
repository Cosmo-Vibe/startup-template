import React from 'react';
import styles from './Sidebar.module.css';

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => {
  return (
    <nav className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <button 
        onClick={closeSidebar}
        className={styles.closeButton}
        aria-label="Close menu"
      >
        Close ×
      </button>
      <a href="#about" onClick={closeSidebar} className={styles.sidebarItem}>ABOUT</a>
      <a href="#team" onClick={closeSidebar} className={styles.sidebarItem}>TEAM</a>
      <a href="#work" onClick={closeSidebar} className={styles.sidebarItem}>WORK</a>
      <a href="#pricing" onClick={closeSidebar} className={styles.sidebarItem}>PRICING</a>
      <a href="#contact" onClick={closeSidebar} className={styles.sidebarItem}>CONTACT</a>
    </nav>
  );
};

export default Sidebar;
