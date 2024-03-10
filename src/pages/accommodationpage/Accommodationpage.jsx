import React from 'react'
import './accommodationpage.css'
import Carousel from '../../components/carousel/Carousel'

const Accommodationpage = (props) => {
  const { pictures } = props.location.state;

  return (
    <main>
      <Carousel
      image = {pictures}/>
    <div>coucou</div>
    </main>
  )
}

export default Accommodationpage
