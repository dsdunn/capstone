import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { auth } from '../firebase';
import { setProfile } from '../actions';

const Dashboard = (props) => {

  const handleSignOut = () => {
    auth.doSignOut();
    props.signOut();
  }

  const handleViewProfile = () => {
    props.setProfile(props.user);
  }

  return (
    <div className={props.active ? 'dashboardShow dashboard' : 'dashboardHide dashboard'}>
      <p className='dashboard-username'>Hello, {props.user.username}.</p>
      <div>
      <NavLink className='dashboard-link dashboard-view-profile' onClick={() => {handleViewProfile()}} exact to={'/user'} >View Profile</NavLink>
      <NavLink className='dashboard-link' to={'/user/editprofile'}>Edit Profile</NavLink>
      <NavLink className='dashboard-link' to={'/user/addcollection'}>Add/Edit Collection</NavLink>
      <NavLink className='dashboard-link' to={'/user/settings'}>Account Settings</NavLink>
      <Link className='dashboard-link' to={'/'} onClick={() => props.handleSignOut()}>Sign Out</Link>
      </div>
    </div>
  )
}

export const MapStateToProps = (state) => ({
  user: state.user
})

export const MapDispatchToProps = (dispatch) => ({
  setProfile: (user) => dispatch(setProfile(user))
})

export default withRouter(connect(MapStateToProps, MapDispatchToProps)(Dashboard));