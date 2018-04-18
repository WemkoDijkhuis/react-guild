import React from 'react';
import PropTypes from 'prop-types';

class GroceryListPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      groceries: props.groceries,
      inputName: '',
      inputAmount: ''
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(e) {
    this.setState({
      inputName: e.target.value
    });
  }

  handleChangeAmount(e) {
    this.setState({
      inputAmount: e.target.value
    });
  }

  handleSubmit() {
    const { inputName, inputAmount, groceries } = this.state;

    this.setState({
      groceries: [...groceries, { name: inputName, amount: inputAmount }],
      inputName: '',
      inputAmount: ''
    });
  }

  render() {
    const { title } = this.props;
    const { groceries,inputAmount, inputName } = this.state;

    return (
      <div>
        <h2>{title}</h2>
        <ul>
          {groceries.map((grocery, index) => (
            <li key={index}>{grocery.name} {grocery.amount}</li>
          ))}
        </ul>
        <input name="name" placeholder="name" value={inputName} onChange={this.handleChangeName} />
        <input name="amount" type="number" value={inputAmount} placeholder="amount" onChange={this.handleChangeAmount} />
        <button onClick={this.handleSubmit}>Submit</button>
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
