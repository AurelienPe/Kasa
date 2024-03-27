import React, { useState } from 'react';
import './carousel.css';
import data from '../../assets/logements.json';

/**
 * Create a carousel component that displays a series of images with navigation buttons.
 */
const Carousel = ({ images, alt }) => {

  let [index, setIndex] = useState(0)

    /**
   * A function that moves to the previous image in the list.
   */
  const goPrevious = () => {
    setIndex((index) => 
      (index - 1 + images.length) % images.length)
  }

    /**
   * A function that increments the index and wraps around if it reaches the end of the images array.
   */
  const goNext = () => {
    setIndex((index) => 
      (index + 1) % images.length)
  }

  return (
    <header className="carousel">

      <img src={images[index]} alt={`${alt} (${data.carousel} ${index + 1})`}/>

      { images.length > 1 && (
        <>
          <button onClick={goPrevious}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <b>{index + 1}/{images.length}</b>

          <button onClick={goNext}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          </>
      )}

    </header>
  )
}
export default Carousel;
