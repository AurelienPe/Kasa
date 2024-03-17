import React from 'react';
import bannerimg from '../../images/banner-about.png';
import Banner from '../../components/banner/Banner';
import Collapse from '../../components/collapse/Collapse';
import aboutdata from '../../assets/about';

const About = () => {
  const mappedData = aboutdata.map((item, index) => {
    const title = item.title;
    const text = item.text;

    return (
      <Collapse
        title={title}
        text={text}
        index={index}
      />
    );
  });

  return (
    <main>
      <Banner 
        url={bannerimg}
        className={"display-none"} 
        altText={"about banner"}/>

      <ul className="collapse">
        {mappedData}
      </ul>
    </main>
  );
}

export default About;