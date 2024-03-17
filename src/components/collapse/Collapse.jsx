import './collapse.css'
import React, { useState } from 'react';

const Collapse = ({ title, text, index }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const expandCollapse = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  }
  const collapseItems =
    <li key={index}>
      <h2>{title}</h2>
      <button onClick={() => expandCollapse(index)}>
        <i className={`fa-solid ${activeIndex === index ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
      </button>
      <p className={activeIndex === index ? 'display-block' : 'display-none'}>{text}</p>
    </li>
    ;

  return collapseItems;
}

export default Collapse;
