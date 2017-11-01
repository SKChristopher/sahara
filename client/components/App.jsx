import React, { Component } from 'react';
import axios from 'axios';

import SignIn from './SignIn.jsx';
import Items from './Items.jsx';
import Search from './Search.jsx';
import Cart from './Cart.jsx';
import Wishlist from './Wishlist.jsx';
import Checkout from './Checkout.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [],
      inventoryStorage: [],
      cart: [],
      wishlist: [],
      username: "Guest",
      search: '',
      qty: [],
      description: '',
    };
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClearSearch = this.handleClearSearch.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleShowFullDescription = this.handleShowFullDescription.bind(this);
    this.handleHideFullDescription = this.handleHideFullDescription.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleClearCart = this.handleClearCart.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
    this.handleCloseWindow = this.handleCloseWindow.bind(this);
    this.enableConfirmPurchase = this.enableConfirmPurchase.bind(this);
    this.handleConfirmPurchase = this.handleConfirmPurchase.bind(this);
    this.handleAddToWishlist = this.handleAddToWishlist.bind(this);
    this.handleRemoveFromWL = this.handleRemoveFromWL.bind(this);
    this.handleAddToCartFromWL = this.handleAddToCartFromWL.bind(this);
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
  handleDisplaySignIn() {
    let signIn = document.getElementById('sign-in-display');

    signIn.style.display = 'block';
  }

  handleCloseSignIn() {
    const signIn = document.getElementById('sign-in-display');

    signIn.style.display = 'none';
  }
  
  handleSignIn(e) {
    e.preventDefault();
    const signIn = document.getElementById('sign-in-display');
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
          signIn.style.display = 'none';
          alert('Logged in as ' + username);
        } else { alert('Invalid Login'); }
      });

    e.target.username.value = "";
    e.target.password.value = "";
  }

  handleSignUp(e) {
    e.preventDefault();
    const signIn = document.getElementById('sign-in-display');
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
          signIn.style.display = 'none';
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
    let descriptionBox = document.getElementById('description');
    let description = e.target.id
    let x = e.pageX;
    let y = e.pageY;
    descriptionBox.style.left = x + 'px';
    descriptionBox.style.top = y - 175 + 'px';
    descriptionBox.style.display = 'block';
    this.setState({ description });
  }

  handleHideFullDescription(e) {
    let descriptionBox = document.getElementById('description');
    descriptionBox.style.display = 'none';
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
    } else { alert('That item is already in your cart!') }

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
  
  // --------------------------------------------------- wishlist management -----------------------------------------------------------------------------------------------------------

  handleAddToWishlist(e) {
    e.preventDefault();
    const obj = Object.assign({}, this.state);
    let wishlist = obj.wishlist;
    let inventory = obj.inventory;
    const x = Math.round(e.target.id.replace(/[^0-9]/g, ''));

    if (wishlist.indexOf(inventory[x]) === -1 && this.state.username !== 'Guest') {
      wishlist.push(inventory[x]);
    } else if (this.state.username !== 'Guest') {
       alert('That item is already on your wishlist!')
      } else alert('You must be logged in to create a wishlist.');

    this.setState({ wishlist });
  }

  handleRemoveFromWL(e) {
    e.preventDefault();
    const obj = Object.assign({}, this.state);
    let wishlist = obj.wishlist;

    wishlist = wishlist.filter((x) => {
      return ((x.name + 'WL') !== e.target.id);
    });

    this.setState({ wishlist });
  }

  handleAddToCartFromWL(e) {
    e.preventDefault();
    const obj = Object.assign({}, this.state);
    let cart = obj.cart;
    let wishlist = obj.wishlist;
    let qty = obj.qty;
    const x = Math.round(e.target.id.replace(/[^0-9]/g, ''));

    if (cart.indexOf(wishlist[x]) === -1) {
      cart.push(wishlist[x]);
      qty.push(1);
      wishlist.splice(x , 1);
    } else { alert('That item is already in your cart!') }

    this.setState({ cart, qty, wishlist });
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
    const obj = Object.assign({}, this.state);
    let cart = obj.cart;
    let qty = obj.qty;
    const checkout = document.getElementById('fade');
    const checkbox = document.getElementById('checkbox');
    const confirmPurchase = document.getElementById('confirmPurchase');
    const creditCardInput = document.getElementById('credit-card');

    for (let i = 0; i < cart.length; i += 1) {
      cart[i].qty = qty[i];
     // cart[i].description = '';
    }

    if (e.target.firstname.value !== '' && e.target.lastname.value !== '' && e.target.address.value !== '' && e.target.creditcard.value !== '') {
      axios.post("confirmPurchase", {
        firstname: e.target.firstname.value,
        lastname: e.target.lastname.value,
        address: e.target.address.value,
        creditcard: e.target.creditcard.value,
        purchase: cart,
      })
        .then(response => {
          if (response.data === true) {
            alert('Purchase Complete!');
          } else if (response.data !== true) {
            alert('Error, purchase not successful.');  
            return;
          }
        });

        checkout.style.display = 'none';
        checkbox.checked = false;
        confirmPurchase.disabled = true;
        creditCardInput.value = '';
        cart = [];
        qty = [];
        this.setState({ cart, qty });
    } else alert('Error, purchase not successful. Please fill out all fields.');
  }


  render() {
    return (
      <div>
        <SignIn displaySignIn={this.handleDisplaySignIn} closeSignIn={this.handleCloseSignIn} signIn={this.handleSignIn} signUp={this.handleSignUp} username={this.state.username}/>
        <Search clearSearch={this.handleClearSearch} search={this.handleSearch} />
        <Items showFullDescription={this.handleShowFullDescription} hideFullDescription={this.handleHideFullDescription} inventory={this.state.inventory} addToCart={this.handleAddToCart} description={this.state.description} addToWishlist={this.handleAddToWishlist} removeFromWL={this.handleRemoveFromWL} />
        <Cart checkout={this.handleCheckout} clearCart={this.handleClearCart} remove={this.handleRemove} cart={this.state.cart} qty={this.state.qty} />
        <Wishlist username={this.state.username} wishlist={this.state.wishlist} removeFromWL={this.handleRemoveFromWL} addToCartFromWL={this.handleAddToCartFromWL}/>
        <Checkout confirmPurchase={this.handleConfirmPurchase} enableConfirmPurchase={this.enableConfirmPurchase} closeWindow={this.handleCloseWindow} />
      </div>
    );
  }
}

export default App;
