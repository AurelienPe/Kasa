import './cards.css'
import { Link } from 'react-router-dom';

const Cards = ({ data }) => {
  const cardItems = data.map((item, index) => (
    <figure>
        <div key={index}>
          <Link to={`/accommodation/${item.id}`}>
      <img src={item.cover} alt={item.title} />
      </Link>
      <figcaption>{item.title}</figcaption>
        </div>
    </figure>
  ));

  return (
    <section className="card-container">
      {cardItems}
    </section>
  );
}

export default Cards
