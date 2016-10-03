'use strict'
import routes from './routes';
// require('./assets/stylesheets/base.scss');
// require('./assets/stylesheets/navigation.scss');
// require('./assets/stylesheets/lemonade.scss');

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Router, browserHistory } from 'react-router';
import reducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(  
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.querySelector('#main'));