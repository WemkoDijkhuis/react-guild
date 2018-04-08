import React from 'react';

require('es5-shim');
require('console-polyfill');

import '../../public/favicon.ico';
import './main.scss';

export default class Init extends React.Component {
    constructor(props) {
        super(props);        
    } 

    render() {
        return (
            <div id="app">
                {this.props.children}
            </div>
        )
    }
}
