import React from 'react';

import './../styles/checkout.scss';

const Checkout = ({ closeWindow, enableConfirmPurchase, confirmPurchase }) => {
  return (
    <div id="fade">
      <div id="checkout">
        <div id='close-checkout' onClick={closeWindow}>X</div>
        <h1>Checkout</h1>
        <form onSubmit={confirmPurchase}>
          <input type="text" placeholder="First Name" name="firstname"></input>
          <br />
          <input type="text" placeholder="Last Name" name="lastname"></input>
          <br />
          <input type="text" placeholder="Address" name="address"></input>
          <br />
          <input type="text" placeholder="Credit Card #" name="creditcard"></input>
          <br />
          <input onClick={enableConfirmPurchase} id="checkbox" type="checkbox" name="ready" value="ready"></input>I agree to pay and I'm ready to checkout.
          <br />
          <button id="confirmPurchase" type="submit" disabled="true">Confirm Purchase</button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;