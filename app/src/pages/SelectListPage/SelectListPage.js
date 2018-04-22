import React, { Component } from 'react';
import pt from 'prop-types';
import { connect } from 'react-redux';
import { saveLists } from '../../reducers/groceries-reducer';

class SelectListPage extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    {/* for next assignment */}
  }

  componentWillMount() {
    const { saveLists } = this.props;

    fetch('http://127.0.0.1:3000/lists')
      .then(response => response.json())
      .then(data => saveLists(data));
  }

  render() {
    const { lists } = this.props;

    if (!lists) return null;

    return (
      <div>
        {lists.map(list => (<button key={list.id}>{list.id}</button>))}
      </div>
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
  })),
  saveLists: pt.func
};

const mapStateToProps = (state) => ({
  lists: state.lists
});

const mapDispatchToProps = (dispatch) => ({
  saveLists: (lists) => dispatch(saveLists({ lists }))
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectListPage);