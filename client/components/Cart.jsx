import React from 'react';

import './../styles/cart.scss';

const Cart = ({ cart, remove, clearCart }) => {
  let total = 0;
  const arr = cart.map((cart, index) => {
    total += cart.price;
    return (
      <li>
        <button id={cart.name} onClick={remove}>X</button><span> </span>
        {cart.name}<span> - </span>${cart.price}
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
      <button>Checkout</button>
      <br />
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}

export default Cart;