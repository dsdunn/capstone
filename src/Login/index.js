import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { id, value } = event.target;

    this.setState({
      [id]: value
    })
  }

  render() {
    return (
      <form>
        <label htmlFor='email'>email</label>
        <input id='email' onChange={this.handleChange}/>
        <label htmlFor='password'>password</label>
        <input id='password'onChange={this.handleChange}/>
        <button type='submit'>Log In</button>
      </form>
    )
  }
}

export default Login;