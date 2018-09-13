import React, { Component } from 'react';
import { getUserInfo } from '../services/fetch'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

export class CollectionSmall extends Component {
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
    getUserInfo(this.props.uid)
      .then(user => this.setState({user}))
  }

  render() {
    return(
      <div className='collection-small'>
        <img className='collection-avatar-small'/>
        <p className='collection-small-username'>{this.state.user.username}</p>
        <p className='collection-location-small'>{this.state.user.location || 'earth'}</p>
        <h3 className='collection-title-small'>{this.props.title}</h3>
        <p className='collection-description-small'>{this.props.description}</p>
        <div className='collection-category-small'>{this.props.category}</div>
      </div>
    )
  }
}



