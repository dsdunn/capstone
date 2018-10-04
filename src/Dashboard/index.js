import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { auth } from '../firebase';
import { setProfile, addCollections } from '../actions';
import { getUserCollections } from '../services/fetch.js';
import PropTypes from 'prop-types';

export const Dashboard = (props) => {

  const handleViewProfile = () => {
    props.setProfile(props.user);
    getUserCollections(props.user.uid)
     .then(results => {
      props.addCollections(results);
      props.history.push('/user');
      });
  }

  const getPath = () => {
    let path = props.history.location.pathname;
    if (path.includes('editprofile')) {
      props.history.goBack()
    }
    let destination = path === '/' ? path + 'editprofile' : path + '/editprofile';
    props.history.push(destination)
  }

  return (
    <div className={props.active ? 'dashboardShow dashboard' : 'dashboardHide dashboard'}>
      <p className='dashboard-username'>Hello, {props.user.username}.</p>
      <div className='dashboard-link-container'>
      <NavLink className='dashboard-link dashboard-view-profile' onClick={() => {handleViewProfile()}} exact to={'/user'} >View Profile</NavLink>
      <a className='dashboard-link test3' onClick={getPath}>Edit Profile</a>
      <NavLink className='dashboard-link' to={'/user/addcollection'}>Add Collection
      </NavLink>
      <Link className='dashboard-link test4' to={'/'} onClick={() => props.handleSignOut()}>Sign Out</Link>
      </div>
    </div>
  )
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  setProfile: (user) => dispatch(setProfile(user)),
  addCollections: (collections) => dispatch(addCollections(collections))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));

Dashboard.propTypes = {
  history: PropTypes.object,
  setProfile: PropTypes.func,
  handleSignOut: PropTypes.func,
  user: PropTypes.object
}