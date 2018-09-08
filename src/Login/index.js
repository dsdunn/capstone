import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../actions';
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
    this.props.signIn(3);
    this.setState({
      email: '',
      password: ''
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

export const mapStateToProps = (state) => ({
  userId: state.userId
})

export const mapDispatchToProps = (dispatch) => ({
  signIn: (userId) => dispatch(signIn(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);


