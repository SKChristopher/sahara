import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './HomePage/Home.jsx';
import CartPage from './CartPage/CartPage.jsx';


const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/cart" component={ CartPage } />
    </Switch>
  </main>
);

export default Main;
