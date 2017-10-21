import React from 'react';


class Header extends React.Component {
  render() {
    return(
      <div id="header-container">
        <div id="logo-container">
          <img alt="logo"/>
        </div>
        <div>
          <h1 id="title"></h1>
        </div>
        <div id="sign-in-container">
          <button>Sign In</button>
          <button>Sign Up</button>
          <button>Logout</button>
        </div>
      </div>
    );
  }
}

export default Header;
