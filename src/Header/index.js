import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { firebase } from '../firebase';
import './styles.css';

const HeaderAuth = () => {
  return (
    <div className='header'>
      HEADER
      <button className='sign-out-btn' onClick={() => auth.doSignOut()}>Sign Out</button>
    </div>
  )
  
}

const HeaderNoAuth = () => {
  return (
    <div className='header'>
      HEADER
      <Link exact='true' to={'/logIn'}>Login</Link>
    </div>
  )
}



const Header = () => {

  // return firebase.auth.onAuthStateChanged((user) => {

  return this.props.user ? HeaderAuth() : HeaderNoAuth() ;
  // })
}



export default Header;