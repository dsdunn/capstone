import React, { Component } from 'react';
import { getUserInfo } from '../services/fetch'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class CollectionSmall extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: '',
      avatar: ''
    }
  }

  componentDidMount() {
    getUserInfo()
  }

  render() {
    return(
      <div className='collection-small'>
        <img className='collection-avatar-small'/>
        <p className='collection-location-small'>this.state.location</p>
        <h3 className='collection-title-small'>this.props.collection.title</h3>
        <p className='collection-description-small'>this.props.collection.description</p>
        <div className='collection-category-small'>
      </div>
    )
  }
}

