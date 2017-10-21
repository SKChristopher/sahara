import React from 'react';


class Products extends React.Component {
  render() {
    return(
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
            <label for="quantity">Qty: </label>
            <select name="quantity">
              <option value="1" selected>1</option>
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
  }
}

export default Products;
