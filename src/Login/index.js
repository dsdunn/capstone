import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
const Login = () => {
  return (
    <div className='login'>
      Login!!!
      dont has account? <Link exact to={'/Signup'}>Sign up!</Link>
    </div>
  )
}

export default Login;