import React from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => (
  <div id="header-container">
    <div id="logo-container">
      <Link to="/">
        <img alt="logo" />
      </Link>
    </div>
    <div>
      <h1 id="title">Welcome</h1>
    </div>
    <div id="sign-in-container">
      <form onSubmit={ props.signIn } >
        <input type="text" placeholder="username" name="username"></input>
        <input type="password" placeholder="password" name="password"></input>
        <button type="submit">Sign In</button>
      </form>
    </div>
    <div id="sign-up-container">
      <form onSubmit={ props.signUp } >
        <input type="text" placeholder="username" name="username"></input>
        <input type="password" placeholder="password" name="password"></input>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </div>
);

export default Header;
