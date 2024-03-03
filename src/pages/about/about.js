import bannerimg from '../../images/bannerabout.png'
import Banner from '../../components/banner/banner'
import Collapse from "../../components/collapse/collapse";

function About() {
  return (
    <main>
      <Banner 
        banner={bannerimg}
        style={{display: 'none'}} />
      <Collapse />
    </main>
  )
}

export default About