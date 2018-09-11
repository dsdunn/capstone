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
      pic: ''
    }
  }

  componentDidMount() {
    //set state with user info from store
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form id='photo-form'className='modal hidden' onSubmit={this.updatePhoto}>
        <img src=''/>
        <input type='file' name='pic' onChange={this.handleChange} value={this.state.pic}/>
        <input placeholder='new display name' name='displayName' onChange={this.handleChange} value={this.state.displayName}/>
        <textarea placeholder='tell us a little about yourself and what you like to collect' name='bio' onChange={this.handleChange} value={this.state.bio}/>
        <button>submit</button>
      </form>
    )
  }

}

export default EditProfile;


