import React, { useState, useEffect } from 'react';
import styles from './AutoImageGallery.module.css'; // Import your CSS module

const AutoImageGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the index of the next image
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
    }, 1000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex, images]);

  return (
    <section className='my-20'>
    <div className={styles.galleryContainer}>
      <div className={styles.gallery}>
        {images?.map((image, index) => (
          <div
            key={index}
            className={`${styles.galleryItem} ${index === currentIndex ? styles.active : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
    </div>
    </section>
  );
};

export default AutoImageGallery;
