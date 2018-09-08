<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
const Login = () => {
  return (
    <div className='login'>
      Login!!!
      dont has account? <Link exact to={'/Signup'}>Sign up!</Link>
    </div>
  )
=======
import React, { Component } from 'react';
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
>>>>>>> Write basic Login form
}

export default Login;