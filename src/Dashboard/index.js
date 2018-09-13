import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from '../actions';

              // <div className='user-link'><Link exact='true' to={'/user'}>View Profile</Link></div>
{/*<Link exact='true' to={'/user/editprofile'}>
  <button className='update-bio'>edit profile</button>
</Link>*/}

{/*<Link exact='true' to={'/user/addcollection'}>
  <button className='add-collection-button'>Add a collection</button>
</Link>*/}

// sign out btn, usr name, edit profile, add/edit collections, account settings, 



const Dashboard = (props) => {

  const handleSignOut = () => {
    // console.log(props)
  auth.doSignOut()
  props.signOut()
  console.log('signed out')
  }

  return (
    <div>
      Dashboard
      <Link to={'/user/editprofile'}>Edit Profile</Link>
      <Link to={'/addcollection'}>Add/Edit Collection</Link>
      <Link to={'/'} onClick={() => handleSignOut()}>Sign Out</Link>
      <Link to={'/user/editprofile'}>Edit Profile</Link>
      <h5>{props.user.username}</h5>




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