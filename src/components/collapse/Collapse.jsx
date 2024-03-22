import './collapse.css'
import React, { useState } from 'react';

const Collapse = ({ title, text, customKey, list }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const expandCollapse = (key) => {
    setActiveIndex(key === activeIndex ? null : key);
  }

  const collapseItems =
    <li key={customKey}>
      <header>
        <h2>{title}</h2>
        <button onClick={() => expandCollapse(customKey)}>
          <i className={`fa-solid ${activeIndex === customKey ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
        </button>
      </header>
      <div>
        {list ? (
          text.map((item, index) => (
            <p key={index} className={activeIndex === customKey ? 'display-block' : 'display-none'}>{item}</p>
          ))
        ) : (
          <p className={activeIndex === customKey ? 'display-block' : 'display-none'}>{text}</p>
        )}
      </div>
    </li>
    ;

  return collapseItems;
}

export default Collapse;
