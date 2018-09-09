import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { connect } from 'react-redux';
import './styles.css';
import { signOut } from '../actions';

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
          HEADER Auth
          <button className='sign-out-btn' onClick={this.signOut}>Sign Out</button>
        </div>
      )

    const headerNoAuth = (
        <div className='header'>
          HEADER no auth
          <Link exact='true' to={'/logIn'}>Login</Link>
        </div>
      )

    return (
      this.props.user ? headerAuth : headerNoAuth
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.userId
})

export const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);




