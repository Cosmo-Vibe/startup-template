import React from 'react';
import styles from './Skills.module.css';

interface Skill {
  name: string;
  percentage: number;
  icon: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'Photography', percentage: 90, icon: 'fas fa-camera' },
    { name: 'Web Design', percentage: 85, icon: 'fas fa-desktop' },
    { name: 'Photoshop', percentage: 75, icon: 'fas fa-image' }
  ];

  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h3 className={styles.title}>Our Skills.</h3>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore.
          </p>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore.
          </p>
        </div>
        
        <div className={styles.skillsContent}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillItem}>
              <p className={styles.skillName}>
                <i className={`${skill.icon} ${styles.skillIcon}`}></i>
                {skill.name}
              </p>
              <div className={styles.skillBar}>
                <div 
                  className={styles.skillLevel} 
                  style={{ width: `${skill.percentage}%` }}
                >
                  {skill.percentage}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
