import React, { Component } from 'react';
import axios from 'axios';

import Container from './Container.jsx';
import Items from './Items.jsx';
import Search from './Search.jsx';
import Cart from './Cart.jsx';
import Checkout from './Checkout.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [],
      inventoryStorage: [],
      cart: [],
      username: "guest",
      search: '',
      qty: [],
    };
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClearSearch = this.handleClearSearch.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleShowFullDescription = this.handleShowFullDescription.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleClearCart = this.handleClearCart.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
    this.handleCloseWindow = this.handleCloseWindow.bind(this);
    this.enableConfirmPurchase = this.enableConfirmPurchase.bind(this);
    this.handleConfirmPurchase = this.handleConfirmPurchase.bind(this);
  }

  componentDidMount() {
    this.fetchInventory();
    if (this.state.inventory.length === 0) this.fetchInventory();
  }

  fetchInventory() {
    const obj = Object.assign({}, this.state);
    let inventory = obj.inventory;

    axios.get('/getInventory')
      .then((response) => {
        inventory = response.data;
        this.setState({ inventory, inventoryStorage: inventory });
      });
  }

  // --------------------------------------------------- Sign-in / Sign-up -----------------------------------------------------------------------------------------------------------
  handleSignIn(e) {
    e.preventDefault();
    const obj = Object.assign({}, this.state);
    let username = e.target.username.value;

    axios
      .post("verifyUser", {
        username: e.target.username.value,
        password: e.target.password.value
      })
      .then(response => {
        if (response.data !== false) {
          this.setState({ username });
          alert('Logged in as ' + username);
        } else { alert('Invalid Login'); }
      });

    e.target.username.value = "";
    e.target.password.value = "";
  }

  handleSignUp(e) {
    e.preventDefault();
    const obj = Object.assign({}, this.state);
    let username = e.target.username.value;

    axios
      .post("createUser", {
        username: e.target.username.value,
        password: e.target.password.value
      })
      .then(response => {
        if (response.data === true) {
          this.setState({ username });
          alert('Account created! You are now logged in as ' + username);
        } else if (response.data !== true) {
          alert('Error, account not created.');
          return;
        }
      });

    e.target.username.value = "";
    e.target.password.value = "";
  }

  // --------------------------------------------------- searching -----------------------------------------------------------------------------------------------------------
  handleSearch(e) {
    e.preventDefault();
    const obj = Object.assign({}, this.state);
    let inventory = obj.inventoryStorage;
    let search = obj.search;
    search = e.target.search.value;

    inventory = inventory.filter((x) => {
      const lowerCase = x.name.toLowerCase();
      return lowerCase.indexOf(e.target.search.value) !== -1;
    });
    this.setState({ inventory, search });
    e.target.search.value = "";
  }

  handleClearSearch(e) {
    e.preventDefault();
    let inventory = this.state.inventoryStorage;
    this.setState({ inventory });
    console.log('hello');
  }

  // --------------------------------------------------- inventory -----------------------------------------------------------------------------------------------------------
  handleShowFullDescription(e) {
    console.log(e.target.id);

  }

  // --------------------------------------------------- cart management -----------------------------------------------------------------------------------------------------------
  handleAddToCart(e) {
    e.preventDefault();
    const obj = Object.assign({}, this.state);
    let cart = obj.cart;
    let inventory = obj.inventory;
    let qty = obj.qty;
    const x = Math.round(e.target.id.replace(/[^0-9]/g, ''));
    const quantitySelect = document.getElementById('select' + [x])
    const quantity = quantitySelect.options[quantitySelect.selectedIndex].value;

    if (cart.indexOf(inventory[x]) === -1) {
      cart.push(inventory[x]);
      qty.push(quantity);
    } else { alert('That item is already in your cart!')}

    this.setState({ cart, qty });
  }

  handleRemove(e) {
    e.preventDefault();
    const obj = Object.assign({}, this.state);
    let cart = obj.cart;
    let qty = obj.qty;

    let qtyIndex = cart.findIndex((x) => {
      return (x.name === e.target.id);
    });

    cart = cart.filter((x) => {
      return (x.name !== e.target.id);
    });

    qty.splice(qtyIndex, 1);
    this.setState({ cart, qty });
  }

  handleClearCart(e) {
    e.preventDefault();
    const obj = Object.assign({}, this.state);
    let cart = obj.cart;
    let qty = obj.qty;

    cart = [];
    qty = [];
    this.setState({ cart, qty });
  }

    // --------------------------------------------------- checking out -----------------------------------------------------------------------------------------------------------
  handleCheckout() {
    let checkout = document.getElementById('fade');
    checkout.style.display = 'block';

  }

  handleCloseWindow() {
    const checkout = document.getElementById('fade');
    const checkbox = document.getElementById('checkbox');
    const confirmPurchase = document.getElementById('confirmPurchase');
    checkout.style.display = 'none';
    checkbox.checked = false;
    confirmPurchase.disabled = true;
  }

  enableConfirmPurchase() {
    const checkbox = document.getElementById('checkbox');
    const confirmPurchase = document.getElementById('confirmPurchase');

    if (checkbox.checked === true) {
      confirmPurchase.disabled = false;
    } else {
      confirmPurchase.disabled = true;
    }
  }

  handleConfirmPurchase(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        Logged in as: {this.state.username}
        <div id="sign-in-container">
          <form onSubmit={this.handleSignIn} >
            <input type="text" placeholder="username" name="username"></input>
            <input type="password" placeholder="password" name="password"></input>
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div id="sign-up-container">
          <form onSubmit={this.handleSignUp} >
            <input type="text" placeholder="username" name="username"></input>
            <input type="password" placeholder="password" name="password"></input>
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <Search clearSearch={this.handleClearSearch} search={this.handleSearch} />
        <Items showFullDescription={this.handleShowFullDescription} inventory={this.state.inventory} addToCart={this.handleAddToCart} />
        <Cart checkout={this.handleCheckout} clearCart={this.handleClearCart} remove={this.handleRemove} cart={this.state.cart} qty={this.state.qty}/>
        <Checkout confirmPurchase={this.handleConfirmPurchase} enableConfirmPurchase={this.enableConfirmPurchase} closeWindow={this.handleCloseWindow}/>
      </div>
    );
  }
}

export default App;
