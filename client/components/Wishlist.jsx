import React from 'react';
import inventoryImages from './../../data/inventoryImages';
import './../styles/wishlist.scss';

const Wishlist = (props) => {
  if (props.username !== 'Guest') {
    const arr = props.wishlist.map((wishlist, index) => {
      return (
        <li>
          <button className="add-to-cart-from-WL" id={'addToCartFromWLButton' + index} onClick={props.addToCartFromWL}>+</button>
          <button className="x-button" id={wishlist.name + 'WL'} onClick={props.removeFromWL}>X</button><span> </span>
          <img className='WLImage' src={inventoryImages[wishlist.name]} /><span> </span>
          {wishlist.name}<span> - </span>${wishlist.price.toFixed(2)}
        </li>
      );
    });
    return (
      <div className="wishlist-container">
        <h2 className="wishlist-title">Wishlist</h2>
        <ul>
          {arr}
        </ul>
      </div>
    );
  } else return (
    <div className="wishlist-container">
      <h2 className="wishlist-title">Wishlist</h2>
      <ul id="wishlist-guest-text">
        You must login to create a wishlist.
      </ul>
    </div>
  );
}

export default Wishlist;
