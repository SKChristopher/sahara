import React from 'react';
import axios from 'axios';

import Main from './Main.jsx';

import Home from './HomePage/Home.jsx';

import Header from './Header';
import Search from './HomePage/Search';
import ImageSlider from './HomePage/ImageSlider';
import Products from './HomePage/Products';
import Cart from './HomePage/Cart';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "guest",
      inventory: [],
    };
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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
        this.setState({ inventory });
      });
  }

  handleSignIn(e) {
    e.preventDefault();
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

  handleSearch(e) {
    e.preventDefault();
    console.log(this.state.inventory);
  }

  render() {
    return (
      <div id="app-container">
        {'Logged in as: ' + this.state.username}
        <Header signIn={this.handleSignIn} signUp={this.handleSignUp} />
        <Search search={this.handleSearch} />
        <ImageSlider />
        <Products />
        <Cart />
      </div>
    );
  }
}

export default App;
