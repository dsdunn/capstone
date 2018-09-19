import React, { Component } from 'react';
import { getUserInfo, getCollection } from '../services/fetch'
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setProfile, setCollection } from '../actions'
import './styles.css';

class CollectionSmall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        location: '',
        avatar: ''
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

  viewCollectionBig = () => {
    getCollection(this.props.collection.id)
      .then(response => this.props.setCollection({...response, ...this.state.user}));
    this.props.history.push('/collection');

  }

  render() {

    const { title, description, category, image } = this.props.collection;
    return(
      <div className='collection-small'>
          <img className='collection-small-image' src={`https://collecshare.herokuapp.com/${image}`}/>
        <div className='collection-small-top'>
          <div className='collection-small-header'>
            <div>
              <a exact='true' onClick={this.viewCollectionBig}><h3 className='collection-small-title'>{title}</h3>
              </a>
              <div className='collection-small-category'>category: {category}
              </div>
            </div>
            <div className={`collection-small-user-display ${this.props.hideuser ? 'hidden' : ''}` } onClick={this.viewProfile}>
              <div>
                <p className='collection-small-username'>{this.state.user.username}</p>
                <p className='collection-small-location'>{this.state.user.location || 'earth'}</p>
              </div>
              <span><img className='collection-small-avatar' src={`https://collecshare.herokuapp.com/${this.state.user.avatar}`}/></span>
            </div>
          </div>
          <p className='collection-small-description'>{description}</p>
        </div>
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  setProfile: (profile) => dispatch(setProfile(profile)),
  setCollection: (collection) => dispatch(setCollection(collection))
})

export default withRouter(connect(null, mapDispatchToProps)(CollectionSmall))
