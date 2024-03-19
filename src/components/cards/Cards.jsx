import './cards.css'
import { Link } from 'react-router-dom';

const Cards = ({ data }) => {
  const cardItems = data.map((item) => (
    <figure key={item.id}>
      <Link to={`/accommodation/${item.id}`}>
        <img src={item.cover} alt={item.title} />
      </Link>
      <figcaption>{item.title}</figcaption>
    </figure>
  ));

  return (
    <section className="card-container">
      {cardItems}
    </section>
  );
}

export default Cards;