import React from 'react';


const Products = () => (
  <div id="products-container">
    <div id="product1">
      <div>
        <img alt="product" />
      </div>
      <div>
        <h2>product name</h2>
        <p>product description</p>
      </div>
      <div>
        <label>Qty: </label>
        <select name="quantity" defaultValue="1">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button>Add to Cart</button>
        <button>Add to Wishlist</button>
      </div>
    </div>
  </div>
);

export default Products;
