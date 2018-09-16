import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserInfo } from '../services/fetch';
import './styles.css'

class UserProfile extends Component {
  render() {
    return (
      <div>
        <section className='profile-top'>
          <img className='profile-img' src={`https://collecshare.herokuapp.com/${this.props.profile.avatar}`}/>
          <h3 className='profile-display-name'>{this.props.profile.username}</h3>
          <h5 className='profile-location'>{this.props.profile.location}</h5>
          <p className='profile-bio'>{this.props.profile.bio}</p>
        </section>
        <section className='profile-collections'>
          your collections will go here!!!!
        </section>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  profile: state.profile
})

export const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);





