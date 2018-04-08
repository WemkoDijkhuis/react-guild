import React from 'react';
import pt from 'prop-types';

require('es5-shim');
require('console-polyfill');

import '../../public/favicon.ico';
import './main.scss';

class Init extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div id="app">
        {this.props.children}
      </div>
    );
  }
}

Init.propTypes = {
  children: pt.node
};

export default Init;


