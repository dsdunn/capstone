import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserInfo, putUserInfo } from '../services/fetch';
// import './styles.css'

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: null,
      displayName: '',
      bio: '',
      avatar: null
    }
    this.fileInput = React.createRef();
  }

  componentDidMount() {
    //set state with user info from store
    this.setState({
      uid: this.props.user.uid
    })

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
    console.log(this.state.avatar)
    //send fd to backend
    putUserInfo(this.state);
  }

  render() {
    return (
      <form id='photo-form'className='modal hidden' onSubmit={this.handleSubmit}>
        <img src=''/>
        <input type='file' ref={this.fileInput} name='avatar' onChange={this.handleChange}/>
        <input placeholder='new display name' name='displayName' onChange={this.handleChange} value={this.state.displayName}/>
        <textarea placeholder='tell us a little about yourself and what you like to collect' name='bio' onChange={this.handleChange} value={this.state.bio}/>
        <button>submit</button>
      </form>
    )
  }

}

export const mapStateToProps = (state) => ({
  user: state.user
})



export default connect(mapStateToProps)(EditProfile);






