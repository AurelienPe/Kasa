import React, { useEffect, useState } from 'react';
import './accommodationpage.css';
import Carousel from '../../components/carousel/Carousel';
import logementsData from '../../assets/logements'
import './accommodationpage.css'
import Collapse from '../../components/collapse/Collapse';

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
                <img src={accommodationData.host.picture} alt={accommodationData.host.name} />
              </li>

              <li className="host-name">{accommodationData.host.name}</li>

              <li>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </li>
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
