import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserInfo } from '../services/fetch';
// import './styles.css'

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <form id='photo-form'className='modal hidden' onSubmit={this.updatePhoto}>
        <img src=''/>
        <input type='file'/>
        <input placeholder='new display name'/>
        <textarea placeholder='tell us a little about yourself and what you like to collect'/>
        <button>submit</button>
      </form>
    )
  }



}



