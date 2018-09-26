import React, { Component } from 'react';
import classes from './login.css';
import { Link } from 'react-router-dom';

class login extends Component {
  state = {
    username: "",
    password: ""
  }

  onChange = event => {
    console.log(event);
  }

  onSubmit = event => {
    console.log(event);
  }

  render() {
    return <div className="Login">
        <form className="LoginForm" onSubmit={this.onSubmit}>
          <h2>Login</h2>
          <label htmlFor="username">Name:</label>
          <input id="username" type="text" name="username" onChange={this.onChange} />
          <label htmlFor="username">Password:</label>
          <input id="username" type="text" name="username" onChange={this.onChange} />
          <button className="Button" type="submit" value="submit" name="action">Welcome</button>
          <p>Don't you have an account?</p>
          <Link to="/signup">
            <button className="SignupButton">Sign Up</button>
          </Link>
        </form>
      </div>;
  }
}
export default login;