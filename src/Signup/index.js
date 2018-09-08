import React and { Component } from 'react';

class SignIn extends Component () {
  constructor() {
    super() {
      this.state = {
        email: '',
        password: ''
      };
    }
  }

  render() {
    return (
      <form>
        <label htmlFor='email'>email</label>
        <input id='email'/>
        <label htmlFor='password'/>
        <input id='password'/>
        <button type='submit' onClick={this.handleChange} >Sign In</button>
      </form>
      )
  }
}

