import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, IndexRoute, Route, Router} from 'react-router';

import Init from './main';
import Home from './pages/home';

ReactDOM.render(
    <Router history={browserHistory} >        
        <Route path="/" component={Init} >
            <IndexRoute component={Home}/>
        </Route>
    </Router>
    , document.querySelector('#init')
);