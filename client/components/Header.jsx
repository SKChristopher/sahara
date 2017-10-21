import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => (
  <div id="header-container">
    <div id="logo-container">
      <Link to="/">
        <img alt="logo"/>
      </Link>
    </div>
    <div>
      <h1 id="title">Welcome</h1>
    </div>
    <div id="sign-in-container">
      <button>Sign In</button>
      <button>Sign Up</button>
      <button>Logout</button>
    </div>
  </div>
);

export default Header;
