import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { auth } from '../firebase';
import { setProfile } from '../actions';

export const Dashboard = (props) => {

  const handleViewProfile = () => {
    props.setProfile(props.user);
  }

  const getPath = () => {
    let path = props.history.location.pathname;
    let destination = path === '/' ? path + 'editprofile' : path + '/editprofile';
    props.history.push(destination)
  }

  return (
    <div className={props.active ? 'dashboardShow dashboard' : 'dashboardHide dashboard'}>
      <p className='dashboard-username'>Hello, {props.user.username}.</p>
      <div>
      <NavLink className='dashboard-link dashboard-view-profile' onClick={() => {handleViewProfile()}} exact to={'/user'} >View Profile</NavLink>
      <a className='dashboard-link test3' onClick={getPath}>Edit Profile</a>
      <NavLink className='dashboard-link' to={'/user/addcollection'}>Add/Edit Collection</NavLink>
      <NavLink className='dashboard-link' to={'/user/settings'}>Account Settings</NavLink>
      <Link className='dashboard-link test4' to={'/'} onClick={() => props.handleSignOut()}>Sign Out</Link>
      </div>
    </div>
  )
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  setProfile: (user) => dispatch(setProfile(user))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));