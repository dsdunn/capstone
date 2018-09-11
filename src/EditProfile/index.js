import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserInfo } from '../services/fetch';
// import './styles.css'

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: null,
      displayName: '',
      bio: '',
      pic: null
    }
  }

  componentDidMount() {
    //set state with user info from store
  }

  render() {
    return (
      <form id='photo-form'className='modal hidden' onSubmit={this.updatePhoto}>
        <img src=''/>
        <input type='file' value={this.state.pic}/>
        <input placeholder='new display name' value={this.state.displayName}/>
        <textarea placeholder='tell us a little about yourself and what you like to collect' value={this.state.pic}/>
        <button>submit</button>
      </form>
    )
  }

}



