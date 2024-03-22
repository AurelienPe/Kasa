import bannerimg from '../../images/banner.png'
import Banner from '../../components/banner/Banner'
import Cards from '../../components/cards/Cards'
import accommodation from '../../assets/logements'


const Home = () => {

  return (
    <main>

      <Banner
        url={bannerimg}
        altText={"banner home"} />

      <Cards
        data={accommodation}
      />

    </main>
  )
}

export default Home
