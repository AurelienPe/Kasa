import './collapse.css'

const Collapse = ({data}) => {
  const collapseItems = data.map((item, index) => (
    <li key={index}>
      <h2>{item.title}</h2>
      <button><i className="fa-solid fa-chevron-up"></i></button>
      <p>{item.text}</p>
    </li>
  ));

  return collapseItems;
}

export default Collapse
