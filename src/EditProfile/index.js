import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserInfo, putUserInfo } from '../services/fetch';
import { updateUser } from '../actions';
import './styles.css'

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: 'MfCeEte31iYl4wVZzvdXIN32dwB2',
      username: '',
      bio: '',
      location: '',
      avatar: null
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: event.target.files ? event.target.files[0] : value
    })

  }

  handleSubmit = (event) => {
    event.preventDefault()
    // const fd = new FormData();
    // fd.append('image', this.state.avatar, this.state.avatar.name)
    putUserInfo(this.state)
    .then(response => this.props.updateUser(response))

    this.props.history.push('/')
  }

  render() {
    return (
      <form className='edit-profile-form' id='photo-form' onSubmit={this.handleSubmit}>
        <Link className='edit-profile-close-link' exact='true' to={'/user'}>Close</Link>
        <img src=''/>
        <input type='file' ref={this.fileInput} name='avatar' onChange={this.handleChange}/>
        <input placeholder='new display name' name='username' onChange={this.handleChange} value={this.state.username}/>
        <input placeholder='location' name='location' onChange={this.handleChange} value={this.state.location}/>
        <textarea placeholder='tell us a little about yourself and what you like to collect' name='bio' onChange={this.handleChange} value={this.state.bio}/>
        <button>submit</button>
      </form>
    )
  }

}

export const mapStateToProps = (state) => ({
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  updateUser: (user) => dispatch(updateUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);






