import React from 'react';
import { Link } from 'react-router-dom';


const Cart = () => (
  <div id="cart-container">
    <div>
      <p>My Cart:</p>
      
      <p>Subtotal: </p>
      <Link to="/cart">
        <button>Checkout</button>
      </Link>
    </div>
  </div>
);

export default Cart;
