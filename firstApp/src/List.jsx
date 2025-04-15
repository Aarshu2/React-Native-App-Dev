import PropTypes from "prop-types";

function List({ category = "Category", items = [] }) {
  const listItems = items.map(item => (
    <li key={item.id}>
      {item.name}: &nbsp;
      <b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className="listCategory">{category}</h3>
      <ol className="listItems">{listItems}</ol>
    </>
  );
}


export default List