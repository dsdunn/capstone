import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserCollections } from '../services/fetch';
import './styles.css'
import CollectionSmall from '../CollectionSmall';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: null
    }
  }

  componentDidMount() {
    getUserCollections(this.props.profile.uid)
      .then(results => {
        console.log(results)
        const collections = results.map(collection => <CollectionSmall collection={collection} hideuser={true} />);
      this.setState({
        collections
      })
    })
  }


  render() {
    return (
      <div className={'user-profile'}>
        <section className='profile-top'>
          <img className='profile-img' alt='profile' src={`https://collecshare.herokuapp.com/${this.props.profile.avatar}`}/>
          <h3 className='profile-display-name'>{this.props.profile.username}</h3>
          <h5 className='profile-location'>{this.props.profile.location}</h5>
          <p className='profile-bio'>{this.props.profile.bio}</p>
        </section>
        <section className='profile-collections'>
          {this.state.collections || <p>To get started, hit up that dashboard and add a collection!</p>}
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





