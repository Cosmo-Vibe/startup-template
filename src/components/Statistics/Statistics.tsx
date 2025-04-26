import React from 'react';
import styles from './Statistics.module.css';

interface StatItem {
  value: string;
  label: string;
}

const Statistics: React.FC = () => {
  const stats: StatItem[] = [
    { value: '14+', label: 'Partners' },
    { value: '55+', label: 'Projects Done' },
    { value: '89+', label: 'Happy Clients' },
    { value: '150+', label: 'Meetings' }
  ];
  
  return (
    <div className={styles.statistics}>
      {stats.map((stat, index) => (
        <div key={index} className={styles.statItem}>
          <span className={styles.value}>{stat.value}</span>
          <br />
          <span className={styles.label}>{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
