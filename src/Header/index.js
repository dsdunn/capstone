import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { connect } from 'react-redux';
import './styles.css';
import { signOut } from '../actions';
import logo from './images/coins.svg';
import avatar from './images/avatar.png';
import Dashboard from '../Dashboard';

class Header extends Component {
  constructor(props){
    super();

    this.state = { dashboardActive: false }
  }

  signOut = () => {
    auth.doSignOut();
    this.props.signOut();
  }

  handleDashboard = () => {
    const currentState = this.state.dashboardActive;
    this.setState({ dashboardActive: !currentState });
  }


  render() { 
    const headerPic = `http://localhost:3000/${this.props.user.avatar}` || avatar;
    const headerAuth = (
      <div>
        <div className='header'>
          <h1 className='welcome'>
            <Link to={'/user'}>
              <img className='header-logo' src={logo} alt='logo' />
            </Link>
            Collec<span>share</span>
          </h1>
            <div className='header-links'>
            <div className='avatar-dash'>
              <img className='header-avatar' src={headerPic} alt='avatar' />
              <button className='header-dashboardBtn' onClick={this.handleDashboard}>Dashboard</button>
            </div>
            </div>
        </div>
          <Dashboard active={this.state.dashboardActive}/>
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
            <Link className='header-link' exact='true' to={'/collectionsContainer'}>Get All</Link>
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




