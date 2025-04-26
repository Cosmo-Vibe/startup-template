import React from 'react';
import styles from './TeamMember.module.css';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ 
  name, 
  role, 
  description, 
  image 
}) => {
  return (
    <div className={styles.teamMember}>
      <div className={styles.card}>
        <img src={image} alt={name} className={styles.image} />
        <div className={styles.content}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.role}>{role}</p>
          <p className={styles.description}>{description}</p>
          <button className={styles.contactButton}>
            <i className="fas fa-envelope mr-2"></i> Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
