import React from 'react';


class MyCart extends React.Component {
  render() {
    return(
      <div id="my-cart-container">
      <div>
        <p>My Cart:</p>
        
        <p>Subtotal: </p>
        <button>Confirm Purchase</button>
      </div>
    </div>
    );
  }
}

export default MyCart;