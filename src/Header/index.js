import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { connect } from 'react-redux';
import './styles.css';
import { signOut } from '../actions';
import avatar from '../images/avatar.png';
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
    const headerAvatar = `https://collecshare.herokuapp.com/${this.props.user.avatar}` || avatar;

    return (
      <div className='header-container'>
        <div className='header'>
          <h1 className='header-app-name'>Collec<span>share</span></h1>
          <div className='header-nav'>
          {
            this.props.user.uid ? 
              <div className='avatar-dash'>
                <img className='header-avatar' src={headerAvatar} alt='avatar' />
                <button className='header-dashboard-btn' onClick={this.handleDashboard}>Dashboard</button>
              </div> :
              <div>
                <Link className='header-link' exact='true' to={'/login'}>Login</Link>
                <Link className='header-link' exact='true' to={'/signup'}>Create Account</Link>
                <Link className='header-link' exact='true' to={'/collectionsContainer'}>Get All</Link>
              </div>
          } 
          </div>
        </div>
          <Dashboard active={this.state.dashboardActive}/>
      </div>
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




