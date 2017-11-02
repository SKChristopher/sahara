import React from 'react';

import './../styles/signIn.scss';

const SignIn = (props) => {
  return (
    <div id="sign-in-text">
      <a onClick={props.displaySignIn} id="signin-up">
        Sign In / Sign Up
      </a>
      <br />
      <span id="logged-in-as">Logged in as: <span id="user">{props.username}</span></span>
      <div id="sign-in-display">
        <div id="signIn-box">
        <div id='close-signIn' onClick={props.closeSignIn}>X</div>
        <div id="sign-in-container">
          Sign In:
          <form onSubmit={props.signIn} >
            <input autocomplete="off" id="username-box" type="text" placeholder="username" name="username"></input>
            <br />
            <input autocomplete="off" type="password" placeholder="password" name="password"></input>
            <br />
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div id="sign-up-container">
          <br />
          Sign Up:
          <form onSubmit={props.signUp} >
            <input autocomplete="off" type="text" placeholder="username" name="username"></input>
            <br />
            <input autocomplete="off" type="password" placeholder="password" name="password"></input>
            <br />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
