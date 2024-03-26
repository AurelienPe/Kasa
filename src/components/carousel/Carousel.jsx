import React, { useState } from 'react';
import './carousel.css';
import data from '../../assets/logements.json';

const Carousel = ({ images, alt }) => {

  let [index, setIndex] = useState(0)

  const goPrevious = () => {
    setIndex((index) => 
      (index - 1 + images.length) % images.length)
  }

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
