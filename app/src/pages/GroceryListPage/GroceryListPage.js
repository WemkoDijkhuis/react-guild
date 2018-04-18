import React from 'react';
import PropTypes from 'prop-types';

class GroceryListPage extends React.Component {
  render() {
    const { title, groceries } = this.props;

    return (
      <div>
        <h2>{title}</h2>
        <ul>
          {groceries.map((grocery, index) => (
            <li key={index}>{grocery.name} {grocery.amount}</li>
          ))}
        </ul>
      </div>
    );
  }
}

GroceryListPage.propTypes = {
  title: PropTypes.string,
  groceries: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    amount: PropTypes.number
  }))
};

GroceryListPage.defaultProps = {
  title: 'Grocery List',
  groceries: [
    {name: 'Cucumber', amount: 1},
    {name: 'Apples', amount: 3},
    {name: 'Milk', amount: 3},
    {name: 'Cheese', amount: 7}
  ]
};

export default GroceryListPage;
