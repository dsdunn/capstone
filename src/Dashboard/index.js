import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { auth } from '../firebase';
import { setProfile } from '../actions';

const Dashboard = (props) => {

  const handleViewProfile = () => {
    props.setProfile(props.user);
  }

  return (
    <div className={props.active ? 'dashboardShow dashboard' : 'dashboardHide dashboard'}>
      <h5>Hello, {props.user.username}.</h5>
      <Link className='dashboard-link dashboard-view-profile' onClick={() =>handleViewProfile()} to={'/user'} >View Profile</Link>
      <Link className='dashboard-link' to={'/user/editprofile'}>Edit Profile</Link>
      <Link className='dashboard-link' to={'/user/addcollection'}>Add/Edit Collection</Link>
      <Link className='dashboard-link' to={'/settings'}>Account Settings</Link>
      <Link className='dashboard-link' to={'/'} onClick={() => props.handleSignOut()}>Sign Out</Link>
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