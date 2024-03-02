import bannerimg from '../../images/banner.png'
import Banner from '../../components/banner/banner'

function Home() {
  return (
    <main>
      <Banner
        banner={bannerimg} />
    </main>
  )
}

export default Home