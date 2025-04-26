import React from 'react';
import styles from './Work.module.css';

interface WorkProps {
  openImageModal: (src: string, alt: string) => void;
}

const Work: React.FC<WorkProps> = ({ openImageModal }) => {
  const images = [
    { src: '/img/tech_mic.jpg', alt: 'A microphone' },
    { src: '/img/tech_phone.jpg', alt: 'A phone' },
    { src: '/img/tech_drone.jpg', alt: 'A drone' },
    { src: '/img/tech_sound.jpg', alt: 'Soundbox' },
    { src: '/img/tech_tablet.jpg', alt: 'A tablet' },
    { src: '/img/tech_camera.jpg', alt: 'A camera' },
    { src: '/img/tech_typewriter.jpg', alt: 'A typewriter' },
    { src: '/img/tech_tableturner.jpg', alt: 'A tableturner' }
  ];

  return (
    <section id="work" className={styles.work}>
      <h2 className={styles.sectionTitle}>OUR WORK</h2>
      <p className={styles.sectionSubtitle}>What we've done for people</p>

      <div className={styles.galleryGrid}>
        {images.map((image, index) => (
          <div key={index} className={styles.imageContainer}>
            <img 
              src={image.src} 
              alt={image.alt}
              className={styles.galleryImage}
              onClick={() => openImageModal(image.src, image.alt)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
