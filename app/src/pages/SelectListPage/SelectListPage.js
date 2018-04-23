import React, { Component } from 'react';
import pt from 'prop-types';

class SelectListPage extends Component {
  componentWillMount() {
    fetch('http://127.0.0.1:3000/lists')
      .then(response => response.json())
      .then((data) => {/* handle data saving here */});
  }

  render() {
    return (
      <div/>
    );
  }
}

SelectListPage.propTypes = {
  lists: pt.arrayOf(pt.shape({
    id: pt.number,
    groceries: pt.arrayOf(pt.shape({
      name: pt.string,
      amount: pt.number,
      extension: pt.string
    }))
  }))
};

export default SelectListPage;