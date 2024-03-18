import React, { useEffect, useState } from 'react';
import './accommodationpage.css';
import Carousel from '../../components/carousel/Carousel';
import logementsData from '../../assets/logements'
import Collapse from '../../components/collapse/Collapse';
import Rating from '../../components/rating/Rating';

const Accommodationpage = () => {
  const [accommodationData, setAccommodationData] = useState(null);

  useEffect(() => {
    // Extraire l'ID de l'URL
    const pathname = window.location.pathname;
    const id = pathname.substring(pathname.lastIndexOf('/') + 1);

    // Rechercher l'objet correspondant dans les données logements.json
    const data = logementsData.find(item => item.id === id);
    setAccommodationData(data);
  }, []);

  return (
    <main>
      {accommodationData ? (
        <>
          <Carousel images={accommodationData.pictures} />
          <ul className="accommodationpage">

            <li>
              <h2>{accommodationData.title}</h2>
            </li>

            <li>{accommodationData.location}</li>

            <li className="tags-list">
              {accommodationData.tags.map(tag => (
              <p className="tag">{tag}</p>
              ))}
            </li>

            <div>

              <li>
                <Rating rating={accommodationData.rating} />
              </li>
              <div>
                <li className="host-name">{accommodationData.host.name}</li>

                <li>
                  <img src={accommodationData.host.picture} alt={accommodationData.host.name} />
                </li>
              </div>
            </div>

            <li className="collapse">
              <Collapse 
              title='Description'
              text={accommodationData.description} 
              />

              <Collapse
              title='Équipements'
              text={accommodationData.equipments}
              />
            </li>

          </ul>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
}

export default Accommodationpage;
