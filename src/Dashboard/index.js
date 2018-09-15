import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from '../actions';

// add/edit collections, account settings, 


const Dashboard = (props) => {

  const handleSignOut = () => {
    auth.doSignOut();
    props.signOut();
  }

  return (
    <div className={props.active ? 'dashboardActive dashboard' : 'dashboardHide dashboard'}>
      <h5>Hello, {props.user.username}.</h5>
      <Link className='dashboard-link' to={'/dashboard/editprofile'}>Edit Profile</Link>
      <Link className='dashboard-link' to={'/dashboard/addcollection'}>Add/Edit Collection</Link>
      <Link className='dashboard-link' to={'/dashboard/settings'}>Account Settings</Link>
      <Link className='dashboard-link' to={'/'} onClick={() => handleSignOut()}>Sign Out</Link>
    </div>
  )
}

export const MapStateToProps = (state) => ({
  user: state.user
})

export const MapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut())
})

export default connect(MapStateToProps, MapDispatchToProps)(Dashboard);