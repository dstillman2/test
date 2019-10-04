import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import StyledGlobal from './global.css';

import Home from './pages/home';
import App from './pages/app';
import Product from './pages/product';

import StateProvider from './state/context/core';

const routes = (
  <StateProvider>
    <BrowserRouter>
      <StyledGlobal />
      <App>
        <Route exact path="/" component={Home} />
        <Route path="/product" component={Product} />
      </App>
    </BrowserRouter>
  </StateProvider>
);

ReactDOM.render(routes, document.getElementById('root'));