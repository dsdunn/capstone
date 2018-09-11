import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import { getUserInfo } from '../services/fetch';
// import './styles.css'

class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  updatePhoto = (event) => {

  }

  updateBio = (event) => {

  }

  updateDisplayName = (event) => {

  }

  render() {
    return (
      <div>
        <section className='profile-top'>
          <img className='profile-img'/>
          <button className='update-profile-pic'>update profile pic</button>
          <form id='photo-form'className='module hidden' onSubmit={this.updatePhoto}>
            <input type='file'/>
            <button>submit</button>
          </form>
          <h3 className='profile-display-name'></h3>
          <button className='update-profile-name'</button>
          <form id='name-form' className='module hidden' onSubmit={this.updateDisplayName}>
            <input type='file'/>
            <button>submit</button>
          </form>
          <p className='profile-bio'></p>
          <button className='update-bio'>update bio</button>
          <form id='bio-form' className='module hidden' onSubmit={this.updateBio}>
            <input type='file'/>
            <button>submit</button>
          </form>
        </section>
        <section className='profile-collection'>
        </section>
      </div>
    )
  }
}
export default UserProfile;