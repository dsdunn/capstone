import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserInfo, postCollection, getCollections } from '../services/fetch';
import PropTypes from 'prop-types';
import UserProfile from '../UserProfile';
import close from '../images/close.svg';
import { setCollection, addCollections } from '../actions';
import './styles.css'

export class AddCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: null,
      title: '',
      description: '',
      category: ''
    }
  }

  componentDidMount() {
    this.setState({
      uid: this.props.user.uid
    })
  }

  handleChange = event => {
    let { name, value } = event.target;
    this.setState({
      [name]: event.target.files ? event.target.files[0] : value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const body = new FormData(this.form);
    body.append('uid', this.state.uid)
    
    postCollection(body)
      .then(result => this.props.setCollection({...result, ...this.props.user}))
      .then(this.props.history.push('/collection'))
  }

  render() {
    return (
      <form ref={el => (this.form = el)} className='add-collection-form' onSubmit={this.handleSubmit}>
        <a className='login-close-link' exact='true' onClick={() => this.props.history.push('/user')}>
          <img className='close-btn' src={close} />
        </a>
        <label htmlFor='collection-image'>Upload a picture of your collection</label>
        <input name='image' ref={this.fileInput} type='file' />
        <label htmlFor='title'>Collection name: </label>
        <input name='title' placeholder='my collection' value={this.state.title} onChange={this.handleChange}/>
        <label htmlFor='description'>Describe your Collection:</label>
        <textarea name='description' value={this.state.description} onChange={this.handleChange}/>
        <label htmlFor='collection-form-category'></label>
        <div className='collection-form-bottom'>
          <select name='category' required={true} onChange={this.handleChange}>
            <option value=''>choose a category</option>
            <option value='coins'>Coins</option>
            <option value='comics'>Comics</option>
            <option value='cards'>Cards</option>
            <option value='vinyl'>Vinyl</option>
            <option value='other'>Other</option>
          </select>
          <button>Submit</button>
        </div>
      </form>
    )
  }
}

export const mapStateToProps = state => ({
  user: state.user
})

export const mapDispatchToProps = dispatch => ({
  setCollection: (collection) => dispatch(setCollection(collection)),
  addCollections: (collections) => dispatch(addCollections(collections)) 
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddCollection));

AddCollection.propTypes = {
  history: PropTypes.object,
  user: PropTypes.object
}



