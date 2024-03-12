import './collapse.css'
import React, { useState } from 'react';

const Collapse = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const expandCollapse = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  }

  const collapseItems = data.map((item, index) => (
    <li key={index}>
      <h2>{item.title}</h2>
      <button onClick={() => expandCollapse(index)}>
        <i className={`fa-solid ${activeIndex === index ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
      </button>
      <p className={activeIndex === index ? 'display-block' : 'display-none'}>{item.text}</p>
    </li>
  ));

  return collapseItems;
}

export default Collapse;
