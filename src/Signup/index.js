import React, { Component } from 'react';
import { auth } from '../firebase';
import { connect } from 'react-redux';
import { signIn, updateUsername } from '../actions';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      username: '',
      password1: '',
      password2: '',
      error: null
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { id, value } = event.target;

    this.setState({
      [id]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validate(this.state)) {
      auth.doCreateUserWithEmailAndPassword(this.state.email, this.state.password1)
        .then(response => this.props.signIn(response.user.uid))
        .then(()=> this.props.updateUsername(this.state.username))
        .then(() => this.setState({
                          email: '',
                          username: '',
                          password1: '',
                          password2: '',
                          error: null
                        }))
        .catch(error => {
          this.setState({error: error.message})
        })
    } 
  }

  validate(email, password1, password2) {
    return true;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='email'>email</label>
        <input id='email' type='email' onChange={this.handleChange}/>
        <label htmlFor='username'>username</label>
        <input id='username' onChange={this.handleChange}/>
        <label htmlFor='password1'>password</label>
        <input id='password1' type='password' onChange={this.handleChange}/>
        <label htmlFor='password2'>confirm password</label>
        <input id='password2' type='password' onChange={this.handleChange}/>
        <button type='submit'>Sign Up</button>
        <p>{this.state.error}</p>
      </form>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  signIn: (userId) => dispatch(signIn(userId)),
  updateUsername: (username) => dispatch(updateUsername(username))
})

export default connect(null, mapDispatchToProps)(SignUp);


