import React from 'react';
import inventoryImages from './../../data/inventoryImages';
import './../styles/cart.scss';
import FontAwesome from 'react-fontawesome';

const Cart = ({ cart, qty, remove, clearCart, checkout, showCart, closeCart }) => {
  if (showCart === true) {
    let total = 0;
    const arr = cart.map((cart, index) => {
      total += cart.price * qty[index];
      return (
        <li>
          <button className="x-button" id={cart.name} onClick={remove}>X</button><span> </span>
          <img className='cartImage' src={inventoryImages[cart.name]} /><span> </span>
          {qty[index] + 'x ' + cart.name}<span> - </span>${(cart.price * qty[index]).toFixed(2)}
        </li>
      );
    });
    return (
      <div className="cart">
        <h2>My Cart<span onClick={closeCart} className="minimize-button"><FontAwesome name="window-close-o" /></span></h2>
        <ul>
          {arr}
        </ul>
        <span id="total">Total: ${total.toFixed(2)}</span>
        <br />
        <button className="checkout-button" onClick={checkout}><FontAwesome name="shopping-cart" /> Checkout</button>
        <br />
        <button className="clearCart-button" onClick={clearCart}>Clear Cart</button>
      </div>
    );
  } else {
    return (
      <div className="cart">
        <h2>My Cart<span onClick={closeCart} className="minimize-button"><FontAwesome name="window-maximize" /></span></h2>
      </div>
    );
  }
}

export default Cart;
