import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserInfo } from '../services/fetch';
import { saveAs } from 'file-saver/FileSaver';
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
    this.fileInput = React.createRef();
  }

  componentDidMount() {
    //set state with user info from store
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: event.target.files ? event.target.files[0] : value
    })

  }

  handleSubmit = (event) => {
    event.preventDefault()
    const fd = new FormData();
    fd.append('image', this.state.pic, this.state.pic.name)
    //send fd to backend
  }

  render() {
    return (
      <form id='photo-form'className='modal hidden' onSubmit={this.handleSubmit}>
        <img src=''/>
        <input type='file' ref={this.fileInput} name='pic' onChange={this.handleChange}/>
        <input placeholder='new display name' name='displayName' onChange={this.handleChange} value={this.state.displayName}/>
        <textarea placeholder='tell us a little about yourself and what you like to collect' name='bio' onChange={this.handleChange} value={this.state.bio}/>
        <button>submit</button>
      </form>
    )
  }

}

export default EditProfile;


