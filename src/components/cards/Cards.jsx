import './cards.css'

const Cards = ({ data }) => {
  const cardItems = data.map((item, index) => (
    <figure>
      <img src={item.cover} alt={item.title} />
      <figcaption>{item.title}</figcaption>
    </figure>
  ));

  return (
    <section className="card-container">
      {cardItems}
    </section>
  );
}

export default Cards
