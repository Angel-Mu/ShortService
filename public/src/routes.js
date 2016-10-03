'use strict'

import React from 'react';  
import { Route, IndexRoute } from 'react-router';  
import App from './components/app';

import Home from './components/home';
import Login from './components/login';
import NotFound from './components/notfound'
// import Footer from '.components/footer'

export default (  
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/home' component={Home} />
    <Route path='/login' component={Login} />
    <Route path='*' component={NotFound} />
  </Route>
);