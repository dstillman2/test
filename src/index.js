import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import StyledGlobal from './global';

import Home from './pages/home';
import App from './pages/app';
import Product from './pages/product';

const routes = (
  <BrowserRouter>
    <StyledGlobal />
    <App>
      <Route exact path="/" component={Home} />
      <Route path="/product" component={Product} />
    </App>
  </BrowserRouter>

);

ReactDOM.render(routes, document.getElementById('root'));