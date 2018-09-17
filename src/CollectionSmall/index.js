import React, { Component } from 'react';
import { getUserInfo } from '../services/fetch'
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setProfile } from '../actions'

class CollectionSmall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        uid: '',
        location: ''
      }
    }
  }

  componentDidMount() {
    getUserInfo(this.props.collection.uid)
      .then(user => this.setState({user}))
  }

  viewProfile = () => {
    this.props.setProfile(this.state.user);
    this.props.history.push('/user');
  }

  render() {

    const { title, description, category } = this.props.collection;
    return(
      <div className='collection-small'>
        <img className='collection-avatar-small'/>
        <button onClick={this.viewProfile}className='collection-small-profile-button'>view profile</button>
        <p className='collection-small-username'>{this.state.user.username}</p>
        <p className='collection-location-small'>{this.state.user.location || 'earth'}</p>
        <Link exact='true' to={'./collection'}><h3 className='collection-title-small'>{title}</h3></Link>
        <p className='collection-description-small'><div class="collection-small-label">description: </div>{description}</p>
        <div className='collection-category-small'><div class="collection-small-label">category: </div>{category}</div>
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  setProfile: (profile) => dispatch(setProfile(profile))
})

export default withRouter(connect(null, mapDispatchToProps)(CollectionSmall))
