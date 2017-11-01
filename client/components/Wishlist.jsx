import React from 'react';
import inventoryImages from './../../data/inventoryImages';
import './../styles/wishlist.scss';

const Wishlist = (props) => {
  if (props.username !== 'Guest') {
    const arr = props.wishlist.map((wishlist, index) => {
      return(
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
        {arr}
      </div>
    );
  } else return (
    <div className="wishlist-container">
      You must login to create a Wishlist.
    </div>
  );
}

export default Wishlist;
