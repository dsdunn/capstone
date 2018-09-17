import React, { Component } from 'react';
import { getUserInfo } from '../services/fetch'
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setProfile } from '../actions'
import './styles.css';

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
          <img className='collection-small-image'/>
        <div className='collection-small-top'>
          <div className='collection-small-header'>
            <div>
              <Link exact='true' to={'./collection'}><h3 className='collection-small-title'>{title}</h3>
              </Link>
              <div className='collection-small-category'>category: {category}
              </div>
            </div>
            <div className={`collection-small-user-display ${this.props.hideuser ? 'hidden' : ''}`}>
              <p className='collection-small-username'>{this.state.user.username}</p>
              <p className='collection-small-location'>{this.state.user.location || 'earth'}</p>
              <button onClick={this.viewProfile}className='collection-small-profile-button'>view profile
              </button>
            </div>
          </div>
          <p className='collection-small-description'>{description}</p>
        </div>
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  setProfile: (profile) => dispatch(setProfile(profile))
})

export default withRouter(connect(null, mapDispatchToProps)(CollectionSmall))
