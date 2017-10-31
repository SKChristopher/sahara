import React from 'react';

import './../styles/cart.scss';

const Cart = ({ cart, qty, remove, clearCart, checkout }) => {
  let total = 0;
  const arr = cart.map((cart, index) => {
    total += cart.price * qty[index];
    return (
      <li>
        <button id={cart.name} onClick={remove}>X</button><span> </span>
        {qty[index] + 'x ' + cart.name}<span> - </span>${(cart.price * qty[index]).toFixed(2)}
      </li>
    );
  });
  return (
    <div className="cart">
      <h2>My Cart</h2>
      <ul>
        {arr}
      </ul>
      Total: ${total.toFixed(2)}
      <br />
      <button onClick={checkout}>Checkout</button>
      <br />
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}

export default Cart;