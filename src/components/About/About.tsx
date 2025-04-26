import React from 'react';
import styles from './About.module.css';
import FeatureCard from './FeatureCard';

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const About: React.FC = () => {
  const features: FeatureProps[] = [
    {
      icon: 'fas fa-desktop',
      title: 'Responsive',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
    },
    {
      icon: 'fas fa-heart',
      title: 'Passion',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
    },
    {
      icon: 'fas fa-gem',
      title: 'Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
    },
    {
      icon: 'fas fa-cog',
      title: 'Support',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
    }
  ];

  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.sectionTitle}>ABOUT THE COMPANY</h2>
      <p className={styles.sectionSubtitle}>Key features of our company</p>
      
      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <FeatureCard 
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
