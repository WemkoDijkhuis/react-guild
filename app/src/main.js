import React from 'react';
import pt from 'prop-types';

import '../../public/favicon.ico';
import './main.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Init extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div id="app">
        <MuiThemeProvider>
          {this.props.children}
        </MuiThemeProvider>
      </div>
    );
  }
}

Init.propTypes = {
  children: pt.node
};

export default Init;


