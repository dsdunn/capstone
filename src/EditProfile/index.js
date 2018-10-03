import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserInfo, putUserInfo } from '../services/fetch';
import { updateUser, setProfile } from '../actions';
import close from '../images/close.svg';
import AvatarEditor from 'react-avatar-editor';
import MyEditor from '../AvatarEditor';
import PropTypes from 'prop-types';
import './styles.css'

export class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: '',
      username: '',
      bio: '',
      location: '',
      avatar: '',
      showEditor: false
    }
  }

  componentDidMount() {
    this.setState({
      ...this.props.user
    })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    event.target.name === 'avatar' ? this.setState({ showEditor: true }) : this.setState({ showEditor: false }) 
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
      console.log(result)
      this.props.updateUser(result)
      this.props.setProfile(result)
      this.props.history.push('/user');
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

  goBack = () => {
    this.props.history.goBack();
  }

  closeEditor = () => {
    this.setState({ showEditor: false })
  }

  setEditorRef = (editor) => this.editor = editor;

  render() {
    let editor = this.state.showEditor ?
      <div>
        <button className='close-avatar-editor' onClick={this.closeEditor}>close editor</button>
        <MyEditor avatar={this.state.avatar} 
         save={this.handleSaveAvatar}
         test={this.setEditorRef} /> 
      </div>  
       : ''

    let fileUpload = this.state.showEditor ? '' : 
      <div className='edit-profile-input-container'>
        <label htmlFor='avatar'>Select Image:</label>
        <input type='file' name='avatar' onChange={this.handleChange}/>
      </div>

    return (
      <form ref={el => (this.form = el)} className='edit-profile-form' id='photo-form' onSubmit={this.handleSubmit}>
        <a className='edit-profile-close-link' exact='true' onClick={() => this.goBack()} >
          <img className='close-btn' src={close}/>
        </a>
        { editor }
        { fileUpload }
        <div className='edit-profile-input-container'>
          <label htmlFor='username'>username:</label>
          <input className='edit-profile-input' placeholder='new display name' name='username' onChange={this.handleChange} value={this.state.username}/> 
        </div>
        <div className='edit-profile-input-container'>
          <label htmlFor='location'>location:</label>
          <input className='edit-profile-input' placeholder='location' name='location' onChange={this.handleChange} value={this.state.location}/>
        </div>
        <div className='edit-profile-input-container'>
          <label htmlFor='bio'>bio:</label>
          <textarea placeholder='tell us a little about yourself and what you like to collect' name='bio' onChange={this.handleChange} value={this.state.bio}/>
        </div>
        <button className='edit-profile-submit-btn'>submit</button>
      </form>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  setProfile: (user) => dispatch(setProfile(user)),
  updateUser: (user) => dispatch(updateUser(user))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditProfile));

EditProfile.propTypes = {
  history: PropTypes.object,
  setProfile: PropTypes.func,
  updateUser: PropTypes.func,
  user: PropTypes.object
}





