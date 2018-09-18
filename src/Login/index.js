import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn, setProfile } from '../actions';
import { auth } from '../firebase';
import { getUserInfo } from '../services/fetch';
import close from '../images/close.svg'
import './styles.css'


class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      email: '',
      password: '',
      error: ''
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { id, value } = event.target;

    this.setState({
      [id]: value
    })
  }

  resetForm = () => {
    this.setState({
      email: '',
      username: ''
    })
  }

  goBack = () => {
    const path = this.props.history.location.pathname;
    path === '/login' ? this.props.history.push('/home') : this.props.history.goBack();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    auth.doSignInWithEmailAndPassword(this.state.email, this.state.password)
      .then(response => getUserInfo(response.user.uid))
      .then(user => {
        this.props.signIn(user);
        this.props.setProfile(user);
        this.resetForm();
      })
      .then(() => this.goBack())
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
  }

  render() {
    return (
      <form className='login' onSubmit={this.handleSubmit}>
        <a className='login-close-link' exact='true' onClick={() => this.goBack()}>
          <img className='close-btn' src={close} />
        </a>
        <input id='email' value={this.state.email} placeholder='email' onChange={this.handleChange}/>
        <input id='password' type='password' value={this.state.password} placeholder='password' onChange={this.handleChange}/>
        <input type='submit'/>
        <p className='login-err-message'>{this.state.errorMessage}</p>
      </form>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  signIn: (userId) => dispatch(signIn(userId)),
  setProfile: (user) => dispatch(setProfile(user))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));


