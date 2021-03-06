import React from 'react';
import inventoryImages from './../../data/inventoryImages';
import './../styles/items.scss';
import FontAwesome from 'react-fontawesome';

const Items = ({ inventory, addToCart, showFullDescription, hideFullDescription, description, addToWishlist }) => {
  const arr = inventory.map((item, index) => {
    if (item.description.length < 200) {
      return (
        <div className="item-container">
          <div className="item">
            <img className='inventoryImage' src={inventoryImages[item.name]} />
            <h2 className='itemText' id='itemName'>{item.name}</h2>
            <p className='itemText' id='itemPrice'>$ {item.price.toFixed(2)}</p>
            <p className='itemText'>{item.description}</p>
          </div>
          <div id='submit-container'>
            <label> Qty: </label>
            <select id={"select" + index} name="quantity" defaultValue="1">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <br />
            <button className="addToCartButton" id={"Button" + index} onClick={addToCart}><FontAwesome id="cartIcon" name="cart-plus"/> Add to Cart</button>
            <br />
            <button className="addToWishListButton" id={"WLButton" + index} onClick={addToWishlist} ><FontAwesome id="wishlistIcon" name="heart"/> Add to Wishlist</button>
          </div>
        </div>
      );
    } else return (
      <div className="item-container">
        <div className="item">
          <img className='inventoryImage' src={inventoryImages[item.name]} />
          <h2 className='itemText' id='itemName'>{item.name}</h2>
          <p className='itemText' id='itemPrice'>$ {item.price.toFixed(2)}</p>
          <p className='itemText'>{item.description.substring(0, 197)}<span id={item.description} onMouseOver={showFullDescription} onMouseOut={hideFullDescription}>...</span></p>
        </div>
        <div id='submit-container'>
          <label> Qty: </label>
          <select id={"select" + index} name="quantity" defaultValue="1">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <br />
          <button className="addToCartButton" id={"Button" + index} onClick={addToCart}><FontAwesome id="cartIcon" name="cart-plus"/> Add to Cart</button>
          <br />
          <button className="addToWishListButton" id={"WLButton" + index} onClick={addToWishlist} ><FontAwesome id="wishlistIcon" name="heart"/> Add to Wishlist</button>
        </div>
      </div>
    );
  });
  return (
    <div id='inventory-container'>
      {arr}
      <p id="description">{description}</p>
    </div>
  )
};

export default Items;
