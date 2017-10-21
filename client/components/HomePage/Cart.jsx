import React from 'react';
import { Link } from 'react-router-dom';


class Cart extends React.Component {
  render() {
    return(
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
  }
}

export default Cart;
