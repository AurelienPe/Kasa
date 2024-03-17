import React, { useState } from 'react';
import './carousel.css';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  return (
    <header className="carousel">
      <img src={images[currentImageIndex]} alt='' />

      <button onClick={goToPreviousImage}>
        <i class="fa-solid fa-chevron-left"></i>
      </button>

      <button onClick={goToNextImage}>
        <i class="fa-solid fa-chevron-right"></i>
      </button>

    </header>
  );
}

export default Carousel;
