import React from 'react';

import Header from './../Header';
import MyCart from './MyCart';


class CartPage extends React.Component {
  render() {
    return(
      <div id="cart-page-container">
        <Header />
        <MyCart />
      </div>
    );
  }
}

export default CartPage;
