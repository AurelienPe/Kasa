import bannerimg from '../../images/banner.png'
import Banner from '../../components/banner/Banner'
import Cards from '../../components/cards/Cards'
import cardsdata from '../../assets/logements'
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <main>
      <Banner
        url={bannerimg}
        altText={"banner home"} />

      {[cardsdata].map((accommodation, index) => (
        <div key={accommodation.id}>
          <Link to={`/accommodation/${accommodation.id}`}>
            <Cards
              data={accommodation}
            />
          </Link>
        </div>
      ))}
    </main>
  )
}

export default Home
