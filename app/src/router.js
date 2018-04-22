import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {browserHistory, IndexRoute, Route, Router} from 'react-router';
import groceriesReducer from './reducers/groceries-reducer';

import Init from './main';

const initialStore = createStore(groceriesReducer, ['Use Redux']);

ReactDOM.render(
  <Provider store={initialStore}>
    <Router history={browserHistory} >
      <Route path="/" component={Init} >
      </Route>
    </Router>
  </Provider>
  , document.querySelector('#init')
);
