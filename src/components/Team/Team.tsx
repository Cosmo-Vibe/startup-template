import React from 'react';
import styles from './Team.module.css';
import TeamMember from './TeamMember';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      description: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
      image: '/img/team2.jpg'
    },
    {
      name: 'Anja Doe',
      role: 'Art Director',
      description: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
      image: '/img/team1.jpg'
    },
    {
      name: 'Mike Ross',
      role: 'Web Designer',
      description: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
      image: '/img/team3.jpg'
    },
    {
      name: 'Dan Star',
      role: 'Designer',
      description: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
      image: '/img/team4.jpg'
    }
  ];

  return (
    <section id="team" className={styles.team}>
      <h2 className={styles.sectionTitle}>THE TEAM</h2>
      <p className={styles.sectionSubtitle}>The ones who runs this company</p>
      
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <TeamMember 
            key={index}
            name={member.name}
            role={member.role}
            description={member.description}
            image={member.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
