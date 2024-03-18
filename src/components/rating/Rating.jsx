import './rating.css'

const Rating = ({ rating }) => {
  const fullStars = Math.min(5, Math.max(0, rating)); // Limite le nombre d'étoiles pleines entre 0 et 5

  const starIcons = Array(5).fill().map((_, index) => (
    <i key={index} className={index < fullStars ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
  ));

  return (
    <div className="rating">
      {starIcons}
    </div>
  );
}

export default Rating;