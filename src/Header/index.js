import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
  return (
    <div className='header'>
      HEADER
      <Link exact to={'/logIn'}>Login</Link>
    </div>
  )
}

export default Header;