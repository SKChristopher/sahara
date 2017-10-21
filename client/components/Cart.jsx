import React from 'react';


class Cart extends React.Component {
  render() {
    return(
      <div id="cart-container">
        <div>
          <p>My Cart:</p>
          
          <p>Subtotal: </p>
          <button>Checkout</button>
        </div>
      </div>
    );
  }
}

export default Cart;
