import React from 'react';
import styles from './ImageModal.module.css';

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, onClose }) => {
  return (
    <div className={styles.modal} onClick={onClose}>
      <span className={styles.closeButton} title="Close Modal Image">×</span>
      <div className={styles.modalContent}>
        <img src={src} alt={alt} className={styles.modalImage} />
        <p className={styles.caption}>{alt}</p>
      </div>
    </div>
  );
};

export default ImageModal;
