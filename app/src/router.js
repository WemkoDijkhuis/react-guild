import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {browserHistory, IndexRoute, Route, Router} from 'react-router';
import groceriesReducer from './reducers/groceries-reducer';

import SelectListPage from './pages/SelectListPage/SelectListPage';
import GroceryListPage from './pages/GroceryListPage/GroceryListPage';

import Init from './main';

const initialStore = createStore(groceriesReducer, ['Use Redux']);

ReactDOM.render(
  <Provider store={initialStore}>
    <Router history={browserHistory} >
      <Route path="/" component={Init} >
        <IndexRoute component={SelectListPage} />
        <Route component={GroceryListPage} path="groceries" />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('#init')
);
