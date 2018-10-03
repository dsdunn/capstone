import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserCollections } from '../services/fetch';
import './styles.css';
import CollectionSmall from '../CollectionSmall';
import PropTypes from 'prop-types';

export class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: []
    }
  }

  mapResults = (arr) => arr.map(collection => <CollectionSmall collection={collection} hideuser={true} key={collection.id} />)

  render() {
    const collections = this.props.profile.collections ? this.mapResults(this.props.profile.collections) :  <p className='message'>No Collections yet!</p>

      const bio = this.props.profile.bio !== 'null' ? this.props.profile.bio : '' ;
      const location = this.props.profile.location !== 'null' ? this.props.profile.location : '' ;

    return (
      <div>
        <div className='user-profile-background'></div>
          <div className='user-profile'>
              <h1 className='profile-display-name'>{this.props.profile.username}</h1>
          <section className='profile-top'>
            <div>
              <p className='profile-location'>LOCATION: <span className='profile-location-span'>{location}</span></p>
              <p className='profile-bio'>ABOUT ME: <span className='profile-bio-span'>{bio}</span></p>
            </div>
            <div className='profile-avatar-container'>
            <img className='profile-img' alt='profile' src={this.props.profile.avatar}/>
            </div>
          </section>
          <section className='profile-collections'>
            {collections}
          </section>
        </div>    
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  profile: state.profile,
  collection: state.collection
})

export default connect(mapStateToProps)(UserProfile);

UserProfile.propTypes = {
  history: PropTypes.object,
  profile: PropTypes.object
}



