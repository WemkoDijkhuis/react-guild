import React, { Component } from 'react';
import pt from 'prop-types';
import { connect } from 'react-redux';
import { saveLists, selectList } from '../../reducers/groceries-reducer';

class SelectListPage extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { selectList, router } = this.props;
    const { target: { name }} = e;

    selectList(name);
    router.push('groceries');
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
        {lists.map(list => (
          <button
            name={list.id}
            key={list.id}
            onClick={this.handleClick}
          >
            {list.id}
          </button>
        ))}
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
  router: pt.shape({
    push: pt.func
  }),
  saveLists: pt.func,
  selectList: pt.func
};

const mapStateToProps = (state) => ({
  lists: state.lists
});

const mapDispatchToProps = (dispatch) => ({
  saveLists: (lists) => dispatch(saveLists({ lists })),
  selectList: (id) => dispatch(selectList({ id }))
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectListPage);