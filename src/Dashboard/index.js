import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut, setProfile } from '../actions';

// add/edit collections, account settings, 


const Dashboard = (props) => {

  const handleSignOut = () => {
    auth.doSignOut();
    props.signOut();
  }

  const handleViewProfile = () => {
    props.setProfile(props.user);
    // props.history.push('/user');
  }

  return (
    <div className={props.active ? 'dashboardActive dashboard' : 'dashboardHide dashboard'}>
      <h5>Hello, {props.user.username}.</h5>
      <Link className='dashboard-link dashboard-view-profile' onClick={() =>handleViewProfile()} to={'/user'} >View Profile</Link>
      {/*<button onClick={() => handleViewProfile()}></button>*/}
      <Link className='dashboard-link' to={'/editprofile'}>Edit Profile</Link>
      <Link className='dashboard-link' to={'/addcollection'}>Add/Edit Collection</Link>
      <Link className='dashboard-link' to={'/settings'}>Account Settings</Link>
      <Link className='dashboard-link' to={'/'} onClick={() => handleSignOut()}>Sign Out</Link>
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