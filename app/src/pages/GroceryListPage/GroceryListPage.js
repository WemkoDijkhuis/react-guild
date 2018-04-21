import React from 'react';
import PropTypes from 'prop-types';

import styles from './GroceryListPage.scss';
import RaisedButton from 'material-ui/RaisedButton';
import Card from 'material-ui/Card';
import ContentRemove from 'material-ui/svg-icons/content/remove-circle';


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

  handleRemove(i) {
    return () => {
      const { groceries } = this.state;

      this.setState({
        groceries: groceries.filter((grocery, index) => index !== i)
      });
    };
  }

  render() {
    const { title } = this.props;
    const { groceries,inputAmount, inputName } = this.state;

    return (
      <div className={styles.container}>
        <Card className={styles.card}>
          <div className={styles.title}>{title}</div>
          <ul className={styles.list}>
            {groceries.map((grocery, index) => (
              <li key={index}>
                {grocery.name} {grocery.amount}
                <span className={styles.remove}>
                  <ContentRemove
                    style={{
                      color: '#F44336'
                    }}
                    onClick={this.handleRemove(index)}/>
                </span>
              </li>
            ))}
          </ul>
          <div className={styles.buttons}>
            <input name="name" placeholder="name" value={inputName} onChange={this.handleChangeName} />
            <input name="amount" type="number" value={inputAmount} placeholder="amount" onChange={this.handleChangeAmount} />
            <RaisedButton className={styles.submitButton} label="Submit" primary={true} onClick={this.handleSubmit} />
          </div>
        </Card>
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
