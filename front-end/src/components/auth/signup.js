import React, { Component } from 'react';
import style from './signup.css';
import { Link } from 'react-router-dom';

class signup extends Component {
  state = {
    username: '',
    passport: ''
  }
  
  onChange = event => {
    console.log(event);
  }
  onSubmit = event => {
    event.preventDefault();
    console.log(event);
  }

  render() {
    return <div className="Signup">
        <h2>Sign Up</h2>
        <form className="SignupForm" onSubmit={this.onSubmit}>
          <label htmlFor="username">Name:</label>
          <input id="username" name="username" type="text" onChange={this.onChange} />
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" onChange={this.onChange} />
          <button className="Button" type="submit" name="action" value="submit">Create</button>
          <p>Already have an account?</p>
          <Link to="/login">
          <button className="LoginButton">Login</button>
          </Link>
        </form>
      </div>;
  }
}
export default signup;