import React, { useState, useEffect } from 'react';
import styles from './AutoImageGallery.module.css'; // Import your CSS module
const images =[
  "https://i.ibb.co/9ZvZr5r/pic-3.jpg",
  "https://i.ibb.co/GV7bvZ7/pic-4.jpg",
  "https://i.ibb.co/zr85Nds/pic-2.jpg",
  "https://i.ibb.co/zm0HPrZ/pic-1.jpg",
  "https://i.ibb.co/rkbNpFV/pic-5.jpg",
  "https://i.ibb.co/M6b44VM/pic-22.jpg",
  "https://i.ibb.co/FYVny6V/pic-11.jpg",
  "https://i.ibb.co/xJHkNCn/pic-33.jpg",
  "https://i.ibb.co/XyPhXkz/pic-44.jpg",
  "https://i.ibb.co/wWzLbpz/pic-66.jpg",
  "https://i.ibb.co/gVQFp6d/pic-77.jpg",
  "https://i.ibb.co/VYmCwt1/pic-88.jpg" ,
  "https://i.ibb.co/Bn1j250/pic-99.jpg",
  "https://i.ibb.co/Qj7NJhB/pic-10.jpg",
   
  ];
const AutoImageGallery = () => {
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
