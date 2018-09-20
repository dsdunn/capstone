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

  componentDidMount() {
    getUserCollections(this.props.profile.uid)
      .then(results => {
        const collections = this.mapResults(results)
      this.setState({
        collections
      })
    })
  }

  mapResults = (arr) => arr.map(collection => <CollectionSmall collection={collection} hideuser={true} key={collection.id} />)


  render() {
    return (
      <div>
      <div className='user-profile-background'></div>
        <div className='user-profile'>
            <h1 className='profile-display-name'>{this.props.profile.username}</h1>
        <section className='profile-top'>
          <div>
            <p className='profile-location'>LOCATION: <span className='profile-location-span'>{this.props.profile.location}</span></p>
            <p className='profile-bio'>ABOUT ME: <span className='profile-bio-span'>{this.props.profile.bio}</span></p>
          </div>
          <div className='profile-avatar-container'>
          <img className='profile-img' alt='profile' src={`https://collecshare.herokuapp.com/${this.props.profile.avatar}`}/>
          </div>
        </section>
        <section className='profile-collections'>
          {this.state.collections.length ? this.state.collections : <p className='message'>To get started, hit up that dashboard and add a collection!</p>}
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



