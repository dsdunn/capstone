import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut, setProfile } from '../actions';

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
      <h5>Hello, {props.user.username}.</h5>
      <Link className='dashboard-link dashboard-view-profile' onClick={() =>handleViewProfile()} to={'home/user'} >View Profile</Link>
      <Link className='dashboard-link' to={'home/editprofile'}>Edit Profile</Link>
      <Link className='dashboard-link' to={'home/addcollection'}>Add/Edit Collection</Link>
      <Link className='dashboard-link' to={'home/settings'}>Account Settings</Link>
      <Link className='dashboard-link' to={'/home'} onClick={() => handleSignOut()}>Sign Out</Link>
    </div>
  )
}

export const MapStateToProps = (state) => ({
  user: state.user
})

export const MapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
  setProfile: (user) => dispatch(setProfile(user))
})

export default withRouter(connect(MapStateToProps, MapDispatchToProps)(Dashboard));