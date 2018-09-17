import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserInfo, putUserInfo } from '../services/fetch';
import { updateUser } from '../actions';

import AvatarEditor from 'react-avatar-editor';
import MyEditor from '../AvatarEditor'

import './styles.css'

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: '',
      username: '',
      bio: '',
      location: '',
      avatar: '',
    }
  }

  componentDidMount() {
    this.setState({
      ...this.props.user
    })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: event.target.files ? event.target.files[0] : value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const body = new FormData();
    body.append('avatar', this.state.avatar)
    body.append('uid', this.state.uid)
    body.append('username', this.state.username)
    body.append('bio', this.state.bio)
    body.append('location', this.state.location)

    putUserInfo(body, this.state.uid)
    .then(result => {
      this.props.updateUser(result)
      this.props.history.push('/')
    })
  }

  handleSaveAvatar = (event) => {
    event.preventDefault()
    if (this.editor) {
      const canvasScaled = this.editor.getImage()

      canvasScaled.toBlob((blob) => {
        console.log(blob)
        this.setState({ avatar: blob })
      })
    }
  }

  setEditorRef = (editor) => this.editor = editor

  render() {
    let editor = this.state.avatar === '' ? '' : <MyEditor avatar={this.state.avatar} 
                                                           save={this.handleSaveAvatar}
                                                           test={this.setEditorRef}
                                                           />
    
    return (
      <form ref={el => (this.form = el)} className='edit-profile-form' id='photo-form' onSubmit={this.handleSubmit}>
        { editor }
        <Link className='edit-profile-close-link' exact='true' to={'/user'}>Close</Link>
        <input type='file'                    name='avatar'   onChange={this.handleChange}/>
        <input placeholder='new display name' name='username' onChange={this.handleChange} value={this.state.username}/>
        {<input placeholder='fuck this' name='avatar' onChange={this.handleChange} value={this.state.avatar}/>}
        <input placeholder='location'         name='location' onChange={this.handleChange} value={this.state.location}/>
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






