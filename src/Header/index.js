import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { connect } from 'react-redux';
import './styles.css';
import { signOut } from '../actions';
import logo from './images/coins.svg';
import avatar from './images/avatar.png'

class Header extends Component {
  constructor(props){
    super();
  }

  signOut = () => {
    auth.doSignOut();
    this.props.signOut();
  }

  render() { 
    const headerAuth = (
        <div className='header'>
          <h1 className='welcome'>
            <img className='header-logo' src={logo} alt='logo' />
            Collec<span>share</span>
          </h1>
            <img className='header-avatar' src={avatar} alt='avatar' />
            <div className='header-links'>
              <Link className='header-link' to={'/dashboard'}>Dashboard</Link>
            </div>
        </div>
      )

    const headerNoAuth = (
        <div className='header'>
          <h1 className='welcome'>
            <img className='header-logo' src={logo} alt='logo' />
            Collec<span>share</span>
          </h1>
          <div className='header-links'>
            <Link className='header-link' exact='true' to={'/login'}>Login</Link>
            <Link className='header-link' exact='true' to={'/signup'}>Create Account</Link>
          </div>
        </div>
      )

    return (
      this.props.user.uid ? headerAuth : headerNoAuth
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);




