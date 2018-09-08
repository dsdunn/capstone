import React, { Component } from 'react';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      'passwordConf': ''
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
        <label htmlFor='passwordConf'>confirm password</label>
        <input id='passwordConf' onChange={this.handleChange}/>
        <button type='submit'>Sign In</button>
      </form>
    )
  }
}


export default SignUp;

