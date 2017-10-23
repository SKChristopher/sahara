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
    };
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
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
        } else { console.log('failed login'); }
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
        } else if (response.data !== true) return;
      });

    e.target.username.value = "";
    e.target.password.value = "";
  }

  render() {
    return (
      <div id="app-container">
        {this.state.username}
        <Header signIn={this.handleSignIn} signUp={this.handleSignUp} />
        <Search />
        <ImageSlider />
        <Products />
        <Cart />
      </div>
    );
  }
}

export default App;
