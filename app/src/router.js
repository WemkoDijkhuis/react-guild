import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, IndexRoute, Route, Router} from 'react-router';

import GroceryListPage from './pages/GroceryListPage/GroceryListPage';

import Init from './main';

ReactDOM.render(
  <Router history={browserHistory} >
    <Route path="/" component={Init} >
      <IndexRoute component={GroceryListPage} />
    </Route>
  </Router>
  , document.querySelector('#init')
);
