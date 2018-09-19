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
        const collections = results.map(collection => <CollectionSmall collection={collection} hideuser={true} key={collection.id} />);
      this.setState({
        collections
      })
    })
  }


  render() {
    return (
      <div className={'user-profile'}>
        <section className='profile-top'>
          <div>
            <h3 className='profile-display-name'>{this.props.profile.username}</h3>
            <h5 className='profile-location'>{this.props.profile.location}</h5>
            <p className='profile-bio'>{this.props.profile.bio}</p>
          </div>
          <img className='profile-img' alt='profile' src={`https://collecshare.herokuapp.com/${this.props.profile.avatar}`}/>
        </section>
        <section className='profile-collections'>
          {this.state.collections.length ? this.state.collections : <p className='message'>To get started, hit up that dashboard and add a collection!</p>}
        </section>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  profile: state.profile
})

export default connect(mapStateToProps)(UserProfile);

UserProfile.propTypes = {
  history: PropTypes.object,
  profile: PropTypes.object
}



