import './collapse.css'
import React, { useState } from 'react';

const Collapse = ({ title, text, key, list }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const expandCollapse = (key) => {
    setActiveIndex(key === activeIndex ? null : key);
  }

  const collapseItems =
    <li key={key}>
      <header>
        <h2>{title}</h2>
        <button onClick={() => expandCollapse(key)}>
          <i className={`fa-solid ${activeIndex === key ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
        </button>
      </header>
      {list ? (
        text.map((item, index) => (
          <p key={index} className={activeIndex === key ? 'display-block' : 'display-none'}>{item}</p>
        ))
      ) : (
      <p className={activeIndex === key ? 'display-block' : 'display-none'}>{text}</p>
      )}
    </li>
    ;

  return collapseItems;
}

export default Collapse;
