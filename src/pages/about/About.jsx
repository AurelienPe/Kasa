import bannerimg from '../../images/banner-about.png'
import Banner from '../../components/banner/Banner'
import Collapse from '../../components/collapse/Collapse' 
import aboutdata from '../../assets/about'

const data = aboutdata;

const About = () => {
  return (
    <main>
      <Banner 
        url={bannerimg}
        className={"display-none"} 
        altText={"about banner"}/>

        <ul className="collapse">
          <Collapse data={data} />
        </ul>
    </main>
  )
}

export default About
