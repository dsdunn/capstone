import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../actions';
import { auth } from '../firebase';
import { getUserInfo } from '../services/fetch';
import './styles.css'

class Login extends Component {
  constructor(props) {
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

  handleSubmit = (event) => {
    event.preventDefault();
    auth.doSignInWithEmailAndPassword(this.state.email, this.state.password)
      .then(response => getUserInfo(response.user.uid))
      .then(user => {
        console.log('user:', user)
        this.props.signIn(user);
        this.setState({
          email: '',
          password: ''
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='email'>email</label>
        <input id='email' value={this.state.email} onChange={this.handleChange}/>
        <label htmlFor='password'>password</label>
        <input id='password' value={this.state.password} onChange={this.handleChange}/>
        <button type='submit'>Log In</button>
      </form>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  signIn: (userId) => dispatch(signIn(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);


