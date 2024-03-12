import React from 'react'
import './accommodationpage.css'
import Carousel from '../../components/carousel/Carousel'

const Accommodationpage = (props) => {
const { pictures } = props.location || {};
const images = pictures || [];

return (
  <main>
    <Carousel
      images={images}
    />
    <div>Accomodation pages</div>
  </main>
);
}

export default Accommodationpage
