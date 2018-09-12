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
          <h1>Welcome to Collecshare!</h1>
          <p>{this.props.user.username}</p>
          <button className='sign-out-btn' onClick={this.signOut}>Sign Out</button>
            <div className='user-link'><Link exact='true' to={'/user'}>View Profile</Link></div>
            <div className='user-link'><Link to={'/dashboard'}>Dashboard</Link></div>
        </div>
      )

    const headerNoAuth = (
        <div className='header'>
          <h1>Welcome to Collecshare!</h1>
          <Link exact='true' to={'/login'}>Login</Link>
          <Link exact='true' to={'/signup'}>Sign Up</Link>
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




