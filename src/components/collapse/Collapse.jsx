import './collapse.css'
import React, { useState } from 'react';

/**
 * Generates a collapsible section with a title, text, and optional list of items.
 */
const Collapse = ({ title, text, customKey, list }) => {
  const [activeIndex, setActiveIndex] = useState(null);

    /**
   * Function to expand or collapse based on the given key.
   */
  const expandCollapse = (key) => {
    setActiveIndex(key === activeIndex ? null : key);
  }

  const collapseItems =
    <li key={customKey}>
      <div>
        <h2>{title}</h2>
        <button onClick={() => expandCollapse(customKey)}>
          <i className={`fa-solid ${activeIndex === customKey ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
        </button>
      </div>

      { activeIndex === customKey && <div>
        {list ? (
          text.map((item, index) => (
            <p key={index}>{item}</p>
          ))
        ) : (
          <p>{text}</p>
        )}
      </div>}
    </li>
    ;

  return collapseItems;
}

export default Collapse;
