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
      uid: '',
      username: '',
      bio: '',
      location: '',
      avatar: null
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
      [name]: event.target.files ? event.target.files[0] : value
    })

  }

  handleSubmit = (event) => {
    event.preventDefault()
    const body = new FormData(this.form);

    putUserInfo(body, this.state.uid)
    .then(result => {
      // console.log(result)
      this.props.updateUser(result)
      this.props.history.goBack()
    })

  }

  render() {
    return (
      <form ref={el => (this.form = el)} className='edit-profile-form' id='photo-form' onSubmit={this.handleSubmit}>
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






