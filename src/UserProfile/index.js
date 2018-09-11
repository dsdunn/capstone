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
          <button className='update-profile-name'>update display name</button>
          <form id='name-form' className='module hidden' onSubmit={this.updateDisplayName}>
            <input placeholder='new display name'/>
            <button>submit</button>
          </form>
          <p className='profile-bio'></p>
          <button className='update-bio'>update bio</button>
          <form id='bio-form' className='module hidden' onSubmit={this.updateBio}>
            <textarea placeholder='tell us a little about yourself and what you like to collect'/>
            <button>submit</button>
          </form>
        </section>
        <section className='profile-collection'>
          <button className='add-collection-button'>Add a collection</button>
          <form className='add-collection-form'>
            <input id='collection-form-name' placeholder='name your collection'/>
            <label for='collection-form-category'>Select a Category</label>
            <select id='collection-form-category' required='true'>
              <option value=''>choose a category</option>
              <option value='coins'>Coins</option>
              <option value='comics'>Comics</option>
              <option value='cards'>Cards</option>
              <option value='vinyl'>Vinyl</option>
              <option value='other'>Other</option>
            </select>
          </form>
          your collections will go here
        </section>
      </div>
    )
  }
}
export default UserProfile;